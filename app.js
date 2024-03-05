let textoEntrada = document.getElementById("msj-entrada");
let textoSalida = document.getElementById("msj-salida");

let guia = [
    ["e", "i", "a", "o", "u"],
    ["enter", "imes", "ai", "ober", "ufat"]
];

function encriptar() {
    if (validarEntrada(textoEntrada)){
        // Encriptación
        let msj = textoEntrada.value;
        for (let i = 0; i < 5; i++){
            if(msj.includes(guia[0][i])){
                msj = msj.replaceAll(guia[0][i], guia[1][i]);
            }
        }
        textoEntrada.value = "";
        textoSalida.value = msj;
        cambioBtns();
    } else {
        alert("Error al validar los datos, no introduzca mayusculas o caracteres especiales");
        console.log(textoEntrada.value);
    }
}

function validarEntrada(x) {
    let t = x.value;
    let aux = t.match(/^[a-z]+(?:\s[a-z]+)*$/);
    return (aux != null);
}

function cambioBtns() {
    document.getElementById("btn-encriptar").setAttribute("disabled", true);
    document.getElementById("btn-desencriptar").removeAttribute("disabled");
    textoSalida.removeAttribute("readonly");
    textoEntrada.setAttribute("readonly", true);
}

function cambioBtns2() {
    document.getElementById("btn-desencriptar").setAttribute("disabled", true);
    document.getElementById("btn-encriptar").removeAttribute("disabled");
    textoEntrada.removeAttribute("readonly");
    textoSalida.setAttribute("readonly", true);
}

function desencriptar() {
    if (validarEntrada(textoSalida)){
        // Encriptación
        let msj = textoSalida.value;
        for (let i = 0; i < 5; i++){
            if(msj.includes(guia[1][i])){
                msj = msj.replaceAll(guia[1][i], guia[0][i]);
            }
        }
        textoSalida.value = "";
        textoEntrada.value = msj;
        cambioBtns2();
    } else {
        alert("Error al validar los datos, no introduzca mayusculas o caracteres especiales");
        console.log(textoSalida.value);
    }
}
