const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const chemLane = document.getElementById("chemLane");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value;

    if (!value) return;

    const newTask = document.createElement("p");
    newTask.classList.add("task");
    newTask.setAttribute("draggable", "true");
    newTask.textContent = value;

    newTask.addEventListener("dragstart", () => {
        newTask.classList.add("isDragging");
    });

    newTask.addEventListener("dragend", () => {
        newTask.classList.remove("isDragging");
    });

        newTask.addEventListener("click", changeColor)
        newTask.addEventListener("contextmenu", restoreColor)

    chemLane.appendChild(newTask);

    input.value = "";

});