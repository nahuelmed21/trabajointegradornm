/* GALERÍA - INTERACCIÓN DE ÁLBUM*/
function mostrarAlbum(evento) {
  const album = evento.target.dataset.album;

  document.getElementById("infoAlbum").textContent =
    `Seleccionaste el álbum: ${album}`;
}

const imagenes = document.querySelectorAll(".album img");

imagenes.forEach((imagen) => {
  imagen.addEventListener("click", mostrarAlbum);
});

/* FORMULARIO - VALIDACIÓN */
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

const formulario = document.getElementById("formContacto");

formulario.addEventListener("submit", validarFormulario);

/* DATOS - ARRAY DE ÁLBUMES */
const albums = [
  { nombre: "Buenas", año: 2001 },
  { nombre: "Código de barras", año: 2003 },
  { nombre: "Marea", año: 2005 },
  { nombre: "Audiografía", año: 2006 },
  { nombre: "Grietas", año: 2007 },
  { nombre: "Compost", año: 2010 },
  { nombre: "Crónica", año: 2012 },
  { nombre: "Sideral", año: 2013 },
  { nombre: "Tierra Nueva", año: 2015 },
  { nombre: "El día fuera del tiempo", año: 2024 },
];

/* RENDER DINÁMICO DE LISTA */
function renderizarAlbums() {
  const contenedor = document.getElementById("listaAlbums");
  contenedor.innerHTML = "";

  albums.forEach((album) => {
    const li = document.createElement("li");
    li.textContent = `${album.nombre} (${album.año})`;
    contenedor.appendChild(li);
  });
}

/* SI QUISIERA MOSTRAR LISTA AL CARGAR */
//renderizarAlbums();

function buscarAlbum() {
  const input = document
    .getElementById("buscadorAlbum")
    .value.trim()
    .toLowerCase();
  const resultado = document.getElementById("resultadoBusqueda");

  /* SINO DEVUELVE PRIMER ÁLBUM */
  if (input === "") {
    resultado.textContent = "Escribí un álbum para buscar.";
    return;
  }

  const albumEncontrado = albums.find((album) =>
    album.nombre.toLowerCase().includes(input),
  );

  if (!albumEncontrado) {
    resultado.textContent = "No se encontró ese álbum.";
    return;
  }

  resultado.textContent = `${albumEncontrado.nombre} (${albumEncontrado.año}) - Disco de Cielo Razzo`;
}

document.getElementById("btnBuscar").addEventListener("click", buscarAlbum);

/* BUSCAR CON ENTER */
document.getElementById("buscadorAlbum").addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    buscarAlbum();
  }
});
