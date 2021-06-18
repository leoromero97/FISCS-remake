let boton = document.getElementById("menu");
let enlaces = document.getElementById("links");
let contenedor = document.querySelector(".contenedor");
let burger = document.querySelector(".burger");

let contador = 0;
boton.addEventListener("click", function (event) {
  event.preventDefault();
  if (contador == 0) {
    enlaces.className = "links dos";
    contador = 1;
    contenedor.classList.add("ocultarTodo");
    burger.classList.toggle("toggle");
  } else {
    contenedor.classList.remove("ocultarTodo");
    enlaces.classList.remove("dos");
    enlaces.className = "links uno";
    contador = 0;
    burger.classList.remove("toggle");
  }
});

//A partir de esta linea, empieza el codigo para controlar el modal
let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".openModal")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalContainer = document.querySelectorAll(".modalContainer")[0];

abrir.addEventListener("click", function (event) {
  event.preventDefault();
  modalContainer.style.opacity = "1";
  modalContainer.style.visibility = "visible";
  modal.classList.toggle("modalClose");
});

cerrar.addEventListener("click", function () {
  modal.classList.toggle("modalClose");
  //con el set timeout creo una funcion para que a 6segundos pasen los estilos que especifico antes.
  setTimeout(function () {
    modalContainer.style.opacity = "0";
    modalContainer.style.visibility = "hidden";
  }, 600);
});
//Con este script hago click en cualquier lado del modal y se cierra
window.addEventListener("click", function (event) {
  if (event.target == modalContainer) {
    modal.classList.toggle("modalClose");

    setTimeout(function () {
      modalContainer.style.opacity = "0";
      modalContainer.style.visibility = "hidden";
    }, 600);
  }
});