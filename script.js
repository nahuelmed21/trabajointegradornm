console.log("cargar JavaScript.");

function mostrarAlbum(evento) {
  const album = evento.target.dataset.album;

  document.getElementById("infoAlbum").textContent =
    `Seleccionaste el álbum: ${album}`;
}

const imagenes = document.querySelectorAll(".album img");

imagenes.forEach((imagen) => {
  imagen.addEventListener("click", mostrarAlbum);
});

const formulario = document.getElementById("formContacto");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(evento) {
  evento.preventDefault();

  const mensajeFormulario = document.getElementById("mensajeFormulario");

  try {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || email === "" || mensaje === "") {
      throw new Error("Todos los campos son obligatorios.");
    }
    mensajeFormulario.textContent = "Formulario enviado correctamente.";
  } catch (error) {
    mensajeFormulario.textContent = error.message;
  }
}
