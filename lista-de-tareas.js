const ingresor = document.querySelector("#ingresorDeTareas");
const ingresar = document.querySelector("#ingresarTarea");
const limpiar = document.querySelector("#limpiarMesaDeTareas");
const mesaDeTareas = document.querySelector("#mesaDeTareas");

const ingresarTarea = () => {
    let valorIngresor = ingresor.value;
    const nuevaTarea = document.createElement("div");
    nuevaTarea.classList.add("tareaContenedor");

    const checkbox = document.createElement("input");
    checkbox.classList.add("checkBox");
    checkbox.type = "checkbox";

    const parrafo = document.createElement("p");
    parrafo.classList.add("tarea");
    parrafo.textContent = valorIngresor;

    
    nuevaTarea.appendChild(checkbox);
    nuevaTarea.appendChild(parrafo);

    mesaDeTareas.appendChild(nuevaTarea);

    ingresor.value = "";
}

const limpiarMesaDeTareas = () => {

    const tareas = document.querySelectorAll(".tareaContenedor");
    tareas.forEach(tarea => tarea.remove());
}

ingresar.addEventListener("click", ingresarTarea);

limpiar.addEventListener("click", limpiarMesaDeTareas);
