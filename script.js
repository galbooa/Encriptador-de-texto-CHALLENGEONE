var botonEncriptar = document.querySelector(".encriptar");
var botonDesencriptar = document.querySelector(".desencriptar");
var muneco = document.querySelector(".contmuñe");
var contenedor = document.querySelector(".contparrafo");
var resultado = document.querySelector(".textresultado");


botonEncriptar.onclick = function() {
    encriptar();
    alert("Éxito", "Se ha encriptado el texto.", "success");
};

botonDesencriptar.onclick = function() {
    desencriptar();
    alert("Éxito", "Se ha desencriptado el texto.", "success");
};

function encriptar(){
    ocultarAdelante();
    var cajate = recuperarTexto()
    resultado.textContent = encriptarTexto(cajate);
}

function desencriptar(){
    ocultarAdelante();
    var cajate = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajate);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".cajate")
    return cajatexto.value
}

function ocultarAdelante(){
    muneco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const btnCopiar = document.querySelector(".copiar"); 
btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".textresultado").textContent;
    navigator.clipboard.writeText(contenido)
        .then(() => {
            alert("Texto copiado al portapapeles");
            location.reload(); 
        })
});