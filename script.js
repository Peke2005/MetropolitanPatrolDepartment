let menuVisible = false;

// Funcion que muestra y oculta el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function sleccionar() {
  // Ocultar el menu cuando sellecionemos una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

// Ventana emergente
function abrir1() {
  document.getElementById("vent1").style.display = "block";
}

function cerrar1() {
  document.getElementById("vent1").style.display = "none";
}

// Ventana emergente 2
function abrir2() {
  document.getElementById("vent2").style.display = "block";
}

function cerrar2() {
  document.getElementById("vent2").style.display = "none";
}

// Ventana emergente 3
function abrir3() {
  document.getElementById("vent3").style.display = "block";
}

function cerrar3() {
  document.getElementById("vent3").style.display = "none";
}

// Ventana emergente 4
function abrir4() {
  document.getElementById("vent4").style.display = "block";
}

function cerrar4() {
  document.getElementById("vent4").style.display = "none";
}

// Ventana emergente 5
function abrir5() {
  document.getElementById("vent5").style.display = "block";
}

function cerrar5() {
  document.getElementById("vent5").style.display = "none";
}

// Ventana emergente 6
function abrir6() {
  document.getElementById("vent6").style.display = "block";
}

function cerrar6() {
  document.getElementById("vent6").style.display = "none";
}

// Ventana emergente 7
function abrir7() {
  document.getElementById("vent7").style.display = "block";
}

function cerrar7() {
  document.getElementById("vent7").style.display = "none";
}

// Ventana emergente 8
function abrir8() {
  document.getElementById("vent8").style.display = "block";
}

function cerrar8() {
  document.getElementById("vent8").style.display = "none";
}

// Para hacer el slider de los puntos
let sliderPuntos = document.querySelectorAll(".sliderPunto");
let puntoActual = 0;

function avanzarPunto() {
  console.log(puntoActual);
  sliderPuntos[puntoActual].style.backgroundColor = "";
  sliderPuntos[puntoActual].style.borderColor = "white";

  puntoActual++;

  if (puntoActual === sliderPuntos.length - 1) {
    puntoActual = 0;
  }

  sliderPuntos[puntoActual].style.backgroundColor = "white";
  sliderPuntos[puntoActual].style.borderColor = "";

  console.log(puntoActual);
}

function retrocederPunto() {
  sliderPuntos[puntoActual].style.backgroundColor = "";
  sliderPuntos[puntoActual].style.borderColor = "white";

  puntoActual--;

  if (puntoActual < 0) {
    puntoActual = sliderPuntos.length - 2;
  }

  sliderPuntos[puntoActual].style.backgroundColor = "white";
  sliderPuntos[puntoActual].style.borderColor = "";
}

// Para hacer el slider
let slider = document.querySelector(".slider-contenedor");
let sliderIndividual = document.querySelectorAll(".contenido-slider");
let contador = 0;
let width = sliderIndividual[0].clientWidth;
let intervalo = 40000;

window.addEventListener("resize", function () {
  width = sliderIndividual[0].clientWidth;
});

setInterval(function () {
  slides();
}, intervalo);

function slides() {
  slider.style.transition = "transform .8s";
  avanzarPunto();
  contador++;
  if (contador == sliderIndividual.length - 1) {
    setTimeout(function () {
      slider.style.transform = "translate(0px)";
      slider.style.transition = "transform 0s";
      contador = 0;
    }, 1500);
  }
  slider.style.transform = "translate(" + -width * contador + "px)";
}

//Para que funcionen los botones
document.addEventListener("DOMContentLoaded", function () {
  let botonesIzquierda = document.querySelector(".boton-izquierda");
  let botonesDerecha = document.querySelector(".boton-derecha");
  let sliderIndividual = document.querySelectorAll(".contenido-slider");

  function avanzarSeccion() {
    contador++;
    if (contador >= sliderIndividual.length - 1) {
      contador = 0;
    }
    slider.style.transition = "transform .8s";
    slider.style.transform = "translate(" + -width * contador + "px)";
    avanzarPunto();
    mostrarSeccion(contador);
  }

  function retrocederSeccion() {
    slider.style.transition = "transform .8s";

    contador--;
    if (contador < 0) {
      contador = sliderIndividual.length - 2;
    }
    slider.style.transform = `translate(${-width * contador}px)`;
    retrocederPunto();
    mostrarSeccion(contador);
  }

  botonesDerecha.addEventListener("click", avanzarSeccion);
  botonesIzquierda.addEventListener("click", retrocederSeccion);
});
