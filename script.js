// Mensaje de bienvenida cuando carga la página
alert("Bienvenido a mi portafolio");

// Seleccionamos el botón y el texto
const boton = document.querySelector(".btn");
const texto = document.querySelector(".about p");

// Cuando se hace clic en el botón
if (boton) {
  boton.addEventListener("click", () => {
    texto.textContent = "Gracias por visitar mi portafolio, sigo aprendiendo desarrollo web y mejorando mis habilidades";
  });
}