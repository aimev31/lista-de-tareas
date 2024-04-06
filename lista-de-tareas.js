const ingresor = document.querySelector("#ingresorDeTareas");
const ingresar = document.querySelector("#ingresarTarea");
const limpiar = document.querySelector("#limpiarMesaDeTareas");
const mesaDeTareas = document.querySelector("#mesaDeTareas");

const ingresarTarea = () => {
    let valorIngresor = ingresor.value;

    // Crear un nuevo contenedor de tarea
    const nuevaTarea = document.createElement("div");
    nuevaTarea.classList.add("tareaContenedor");

    // Crear un nuevo checkbox y párrafo para la tarea
    const checkbox = document.createElement("input");
    checkbox.classList.add("checkBox");
    checkbox.type = "checkbox";

    const parrafo = document.createElement("p");
    parrafo.classList.add("tarea");
    parrafo.textContent = valorIngresor;

    // Agregar el checkbox y el párrafo al contenedor de la tarea
    nuevaTarea.appendChild(checkbox);
    nuevaTarea.appendChild(parrafo);

    // Agregar la nueva tarea al contenedor de tareas
    mesaDeTareas.appendChild(nuevaTarea);

    // Limpiar el campo de ingreso de tareas después de ingresar una tarea
    ingresor.value = "";
}

// Función para limpiar la mesa de tareas
const limpiarMesaDeTareas = () => {
    // Seleccionar todas las tareas y eliminarlas
    const tareas = document.querySelectorAll(".tareaContenedor");
    tareas.forEach(tarea => tarea.remove());
}

// Agregar evento al botón de ingresar tarea
ingresar.addEventListener("click", ingresarTarea);

// Agregar evento al botón de limpiar mesa de tareas
limpiar.addEventListener("click", limpiarMesaDeTareas);
