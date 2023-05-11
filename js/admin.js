import datos from "../data/data.json" assert { type: "json" };
import { Pelicula } from "../js/clases.js";

// const botonFav = document.getElementById("botonFav")

const cuerpoTabla = document.querySelector("#cuerpo-tabla");

// Para llamar a un modal desde Javascript:
// al hacer ésto, ya tengo acceso a los métodos bootstrap del modal (métodos ".show()"" y ".hide()"):
const myModal = new bootstrap.Modal(document.getElementById("modalGift"));

let idGiftUpdate = null;

// Para mostrar el modal, creo un método global (xq usamos archivo JS tipo module):
// como parámetro, recibe el codigo (id), del elemento película que queremos mostrar:
window.mostrarModal = (codigo) => {
  console.log(codigo);
  idGiftUpdate = codigo;
  let index = datos.findIndex((item) => item.codigo == idGiftUpdate);

  document.querySelector("#giftModal").value = datos[index].nombre;
  document.querySelector("#tipoModal").value = datos[index].categoria;
  document.querySelector("#tiempoModal").value = datos[index].descripcion;
  document.querySelector("#precioModal").value = datos[index].publicada;
  // document.querySelector("#imagenModal").value = datos[index].imagen;

  myModal.show();
};

// Función para actualizar los datos:
const giftUpdate = (e) => {
  e.preventDefault();

  let index = datos.findIndex((item) => item.codigo == idGiftUpdate);

  datos[index].nombre = document.querySelector("#giftModal").value;
  datos[index].categoria = document.querySelector("#tipoModal").value;
  datos[index].descripcion = document.querySelector("#tiempoModal").value;
  datos[index].publicada = document.querySelector("#precioModal").value;
  // datos[index].imagen = document.querySelector("#imagenModal").value;

  // Para refrescar la tabla con los datos ya modificados:
  cargarTabla();
  // Para esconder el modal:
  myModal.hide();
};

/*PELIS PRECARGADAS*/
const cargarTabla = () => {

  cuerpoTabla.innerHTML = "";

  datos.map((item) => {

    const fila = document.createElement("tr");

    const celdas = `<th>${item.codigo}</th>
        <td>${item.nombre}</td>
        <td>${item.categoria}</td>
        <td>${item.descripcion}</td>
        <td>${item.publicada}</td>
        <td>
        <div class="d-flex gap-2">
        <button class="btn btn-outline-warning" onclick="cambiarColor(this)"><i class="fa fa-star-o" aria-hidden="true"></i></button>
        <button class="btn btn-outline-primary" onclick="mostrarModal(${item.codigo})"><i class="fa fa-pencil" aria-hidden="true"></i></button>
        <button class="btn btn-outline-danger" onclick="borrarGift(${item.codigo})"><i class="fa fa-times" aria-hidden="true"></i></button>
        </div>
        </td>
        `;

    fila.innerHTML = celdas;
    cuerpoTabla.append(fila);
  });
};

/*AGREGAR PELICULA*/
const agregarGift = (event) => {
  event.preventDefault();

  let codigo = datos.at(-1).codigo + 1;
  let nombre = document.querySelector("#nombre").value;
  let categoria = document.querySelector("#categoria").value;
  let descripcion = document.querySelector("#descripcion").value;
  let publicada = document.querySelector("#publicada").value;

  datos.push(new Pelicula(codigo, nombre, categoria, descripcion, publicada));
  document.querySelector("#formGift").reset();
  cargarTabla();
};

// BORRAR PELICULA:
// como el archivo js es de tipo "module", para que funcione la función onclick del botón danger, el método tiene que ser global:
window.borrarGift = (codigo) => {
  // Guardamos la posición del elemento que queremos eliminar:
  let index = datos.findIndex((item) => item.codigo == codigo);

  //ESTRUCTURA PARA VALIDAR BORRADO->COMIENZO
  let validar = confirm(
    `Está seguro que desea eliminar la pelicula "${datos[index].nombre}"?`
  );

  if (validar) {
    // Borramos el elemento de la posición index en el arreglo Datos y 1 xq borramos 1 elemento:
    datos.splice(index, 1);
    // Como hemos modificado el arreglo Datos, para mostrarlo actualizado volvemos a ejecutar cargarTabla():
    cargarTabla();
  }
  //ESTRUCTURA PARA VALIDAR BORRADO->FIN
};


//---------------------------------------------------------------------BOTON FAVORITA
window.cambiarColor = (boton) => {
  if (boton.style.backgroundColor == "yellow") {
    boton.style.backgroundColor = "";
  } else {
    boton.style.backgroundColor = "yellow";
  }
};


//----------------------------------------------------------------------BOTON FAVORITA



cargarTabla();

document.querySelector("#formGift").addEventListener("submit", agregarGift);
document.querySelector("#formModal").addEventListener("submit", giftUpdate);

// borrar esto desp
localStorage.setItem("peliculasLS", JSON.stringify(datos));


