// Importaciones
import { armarCiudades, armarGenero } from "./components/index.js";
import { ciudades, generos } from "./use-case/index.js";
import { validar } from "./helpers/validarFormulario.js";

// variables
const formulario = document.querySelector('form');
const documento = document.querySelector("#documento");
const nombre = document.querySelector("#nombre");
// const genero = document.querySelector('input[name="generoId"]:checked');
const genero = document.querySelectorAll('input[type="radio"]');
const correo = document.querySelector("#correo");
const divGeneros = document.getElementById("generos");
const ciudadId = document.querySelector("#ciudadId");

const reglas = [
  {
    documento : {required : true},
    nombre : {required: true},
    genero : {required: true},
    ciudad : {required: true},
    correo : {required: true} 
  }
];

// Métodos
const validarFormulario = (elemento) => {
  console.log(elemento);
  console.log(reglas);
  if (documento.value == "") {
    documento.classList.add('error')
  }
  if (nombre.value == "") {
    nombre.classList.add('error')
  }
  if (correo.value == "") {
    correo.classList.add('error')
  }

}
// Eventos
document.addEventListener("DOMContentLoaded", async () => {
  let datosCiudades = await ciudades();
  let datosGeneros = await generos();
  armarGenero(divGeneros, datosGeneros);
  armarCiudades(ciudadId, datosCiudades)
});

formulario.addEventListener("submit", (form) => {
  form.preventDefault()
  // validarFormulario(e.target);
  validar(form.target, reglas);
});