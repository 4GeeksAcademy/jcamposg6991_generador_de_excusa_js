import "./style.css";

function generateExcuse() {
  let who = [
    "Mi perro",
    "Mi abuela",
    "El cartero",
    "Mi pájaro",
    "Mi vecino",
    "Un desconocido",
    "El gato de mi primo",
    "Mi jefe",
    "Un extraño",
    "Un ladrón"
  ];
  let action = [
    "se comió",
    "orinó",
    "rompió",
    "destruyó",
    "manchó",
    "quemó",
    "perdió",
    "olvidó",
    "robó",
    "tumbó"
  ];
  let what = [
    "mi tarea",
    "mi celular",
    "el carro",
    "mi computadora",
    "mi reloj",
    "los documentos",
    "la comida",
    "mi bicicleta",
    "mi libro",
    "la televisión"
  ];
  let when = [
    "antes de la clase",
    "cuando estaba durmiendo",
    "mientras hacía ejercicio",
    "durante el almuerzo",
    "cuando estaba rezando",
    "en la mañana",
    "mientras cocinaba",
    "mientras hablaba por teléfono",
    "durante la reunión",
    "antes de salir de casa"
  ];

  let whoItem = Math.floor(Math.random() * who.length);
  let actionItem = Math.floor(Math.random() * action.length);
  let whatItem = Math.floor(Math.random() * what.length);
  let whenItem = Math.floor(Math.random() * when.length);

  let excuse =
    who[whoItem] +
    " " +
    action[actionItem] +
    " " +
    what[whatItem] +
    " " +
    when[whenItem] +
    ".";

  document.getElementById("excuse").innerHTML = excuse;
}

window.onload = function() {
  let button = document.getElementById("generateExcuse");
  button.addEventListener("click", generateExcuse);
};
