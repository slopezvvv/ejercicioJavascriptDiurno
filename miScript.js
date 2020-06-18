
function agregarNumeros(numero){
    // Agregar numeros
    var outputLabel = document.getElementById("output");
    outputLabel.innerHTML += numero;
    
    
    // VALIDACION STRINGS
    var string = outputLabel.innerHTML;
    if(string.length >= 10){
        alert("MAXIMO 10 caracteres");
        limpiarOutput();
    }
}

function limpiarOutput(){
    var outputLabel = document.getElementById("output");
    outputLabel.innerHTML = "0";
}