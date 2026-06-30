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