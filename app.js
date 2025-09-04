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

// Actualiza la lista de amigos en el DOM.
const actualizarListaDOM = () => {
  referenciaElementos.listaAmigos.innerHTML = amigos.map((amigo) => `<li>${amigo}</li>`).join("");
};

// Agrega un amigo a la lista.
const agregarAmigo = () => {
  const nombre = referenciaElementos.inputAmigo.value.trim();

  // 1. Validar que no esté vacío.
  if (!nombre) {
    mostrarMensaje("Por favor, escribe un nombre antes de añadir.");
    referenciaElementos.inputAmigo.focus();
    return;
  }

  // 2. Validar que no esté repetido (case-insensitive).
  if (amigos.some((amigo) => amigo.toLowerCase() === nombre.toLowerCase())) {
    mostrarMensaje(`El nombre "${nombre}" ya fue agregado.`);
    referenciaElementos.inputAmigo.value = "";
    referenciaElementos.inputAmigo.focus();
    return;
  }

  // 3. Si pasa las validaciones, lo agregamos y actualizamos la vista.
  amigos.push(nombre);
  actualizarListaDOM();
  referenciaElementos.inputAmigo.value = "";
  referenciaElementos.inputAmigo.focus();

  // Actualizamos el estado de los botones después de agregar un amigo.
  actualizarBotones();
};

// Sortea y muestra un amigo secreto.
const sortearAmigo = () => {

  // Deshabilitar el botón de sortear una vez que se ha realizado el sorteo.
  referenciaElementos.btnSortear.disabled = true;

  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indice];

  referenciaElementos.resultado.innerHTML = `<li>¡El amigo secreto es: ${amigoSecreto}!</li>`;
};

// Al cargar la página, establecemos el estado inicial de los botones.
window.onload = actualizarBotones;