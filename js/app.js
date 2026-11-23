const formulario = document.getElementById("formulario");
const inputTarea = document.getElementById("inputTarea");
const listaTareas = document.getElementById("listaTareas");
const contador = document.getElementById("contador");

let tareas = [];

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

function mostrarTareas() {
    listaTareas.innerHTML = "";

    let pendientes = 0;

    for (let i = 0; i < tareas.length; i++) {

        let elemento = document.createElement("li");

        let casilla = document.createElement("input");
        casilla.type = "checkbox";
        casilla.checked = tareas[i].completada;
        casilla.title = tareas[i].completada
            ? "Desmarcar tarea"
            : "Marcar tarea como completada";

        let texto = document.createElement("span");
        texto.textContent = " " + tareas[i].nombre + " ";

        casilla.addEventListener("change", function() {
            tareas[i].completada = casilla.checked;
            mostrarTareas();
        });

        if (tareas[i].completada === true) {
            texto.style.textDecoration = "line-through";
            texto.style.color = "#84968c";
        } else {
            pendientes++;
        }

        let boton = document.createElement("button");
        boton.textContent = "Eliminar";
        boton.type = "button";
        boton.classList.add("btn-eliminar");

        boton.addEventListener("click", function() {
            tareas.splice(i, 1);
            mostrarTareas();
        });

        elemento.appendChild(casilla);
        elemento.appendChild(texto);
        elemento.appendChild(boton);

        listaTareas.appendChild(elemento);
    }

    contador.textContent = pendientes;
}

