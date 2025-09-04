// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [] //Se crea una array para almacenar los nombres

//Creo un objeto de acceso rapido a los elementos del html o dom
const referenciaElementos = {
  listaAmigos: document.getElementById("listaAmigos"),
  inputAmigo: document.getElementById("amigo"),
  resultado: document.getElementById("resultado"),
  // Referenciamos los botones.
  btnSortear: document.querySelector('.button-draw[onclick="sortearAmigo()"]'),
  btnReiniciar: document.querySelector('.button-draw[onclick="reiniciar()"]'),
}

//Creo una funcion para mostrar mensajes de alerta o informacion
const mostrarMensaje = (texto) => {
  alert(texto);
};

// Función para habilitar o deshabilitar los botones de sorteo y reinicio.
const actualizarBotones = () => {
  // Deshabilita el botón de sortear si hay menos de 2 amigos.
  referenciaElementos.btnSortear.disabled = amigos.length < 2;

  // Habilita el botón de reiniciar si hay al menos un amigo.
  referenciaElementos.btnReiniciar.disabled = amigos.length === 0;
};

//Creamo una Función de inicialización
const inicializar = () => {
  // Llamamos a actualizarBotones para establecer el estado inicial de los botones.
  actualizarBotones();
};

// Al cargar la página, inicializamos la aplicación.
window.onload = actualizarBotones;