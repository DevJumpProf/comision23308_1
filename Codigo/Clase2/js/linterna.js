let estadoLinterna = "apagado";

let sonidoBatman = document.querySelector("#bati_encendido");
let sonidoBoton = document.querySelector("#bati_click");

let batman = document.querySelector("#batman");
let batmanBoton = document.querySelector("#bati_boton");

//evento

batmanBoton.addEventListener("click",controlarLinterna)

function controlarLinterna() {
  if (estadoLinterna == "apagado") {
    estadoLinterna = "encendido";
    sonidoLinterna()
    batman.classList.add("batman_activo");
  } else {
    estadoLinterna = "apagado";
    sonidoLinterna()
    batman.classList.remove("batman_activo");
  }
}

function sonidoLinterna() {
  if (sonidoBatman.paused) {
    sonidoBoton.play();
    sonidoBatman.play();
  } else {
    sonidoBoton.play();
    sonidoBatman.pause();
    sonidoBatman.currentTime=0;
  }
}


/* const sonidoLinterna2=(num1,num2)=>{
console.log (num1+num2 ) 
}
sonidoLinterna2(10,10) */