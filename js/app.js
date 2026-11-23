const formulario = document.getElementById("formulario");
const inputTarea = document.getElementById("inputTarea");
const listaTareas = document.getElementById("listaTareas");
const contador = document.getElementById("contador");

let tareas = [];

// 1. Agregar nuevas tareas
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    let texto = inputTarea.value.trim();

    if (texto === "") {
        return;
    }

    let nuevaTarea = {
        nombre: texto,
        completada: false
    };

    tareas.push(nuevaTarea);

    inputTarea.value = "";
    mostrarTareas();
});
