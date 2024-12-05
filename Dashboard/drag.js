const draggables = document.querySelectorAll(".task");
const droppables = document.querySelectorAll(".swimLane");

draggables.forEach((task) => {
    task.addEventListener("dragstart", () => {
        task.classList.add("isDragging");

    });
    task.addEventListener("dragend", () => {
        task.classList.remove("isDragging");
    });
});

droppables.forEach((zone => {
    zone.addEventListener("dragover", (e) => {
        e.preventDefault();

        const bottomTask = insertAboveTask(zone, e.clientY);
        const currentTask = document.querySelector(".isDragging");

        if (!bottomTask) {
            zone.appendChild(currentTask);
        }
        else {
            zone.insertBefore(currentTask, bottomTask);
        }
    });
}));

const insertAboveTask = (zone, mouseY) => {
    const els = zone.querySelectorAll(".task:not(isDragging)");

    let closestTask = null;
    let closestOffset = Number.NEGATIVE_INFINITY;

    els.forEach((task) => {
        const { top } = task.getBoundingClientRect();
        
        const offset = mouseY - top;

        if (offset < 0 && offset > closestOffset) {
            closestOffset = offset;
            closestTask = task;
        }
    });

    return closestTask
};