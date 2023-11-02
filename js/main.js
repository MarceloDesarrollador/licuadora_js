var estadoLicuadora = "apagada";                    // Declare una variable estadoLicuadora, comienza apagada
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");


function controlarLicuadora(){                      // Declaro funcion que controla la Licuadora 
    if (estadoLicuadora == "apagada") {             // Pregunto si el estado es apagado?
        estadoLicuadora = "encendida";              // Para que lo cambie a encendido.
        hacerBrrBrr();
        licuadora.classList.add("active");
        /* console.log("me prendiste");   */              // pido imprimir en consola el resultado.
    } else {                                        // Si me dice que esta encendida?
        estadoLicuadora = "apagada";                // Le pido que la apague.
        hacerBrrBrr();
        licuadora.classList.remove("active");
        /* console.log("me apagaste");  */                // y que me imprima en consola si apago.
    }
}

function hacerBrrBrr(){
   if(sonidoLicuadora.paused) {
    botonLicuadora.play();
    sonidoLicuadora.play();
   } else{
    botonLicuadora.play();
    sonidoLicuadora.pause();
    sonidoLicuadora.currentTime = 0;
   }
}