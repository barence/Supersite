let tasks = document.getElementsByClassName("task");

for(let task of tasks) {
    task.addEventListener("click", changeColor)
}
for(let task of tasks) {
    task.addEventListener("contextmenu", restoreColor)
}

function changeColor(event){
    if(event.target.style.backgroundColor == "rgb(247, 236, 148)" || event.target.style.backgroundColor == "rgb(153, 247, 148)") {
        event.target.style.backgroundColor = "rgb(153, 247, 148)";
        event.target.classList.add("dead");
        setTimeout(kill, 800);

    }
    else{
        event.target.style.backgroundColor = "rgb(247, 236, 148)";
    }
}
function restoreColor(event){
    event.preventDefault();
    event.target.style.backgroundColor = "white";
}
function kill(){
    for(let dead of document.getElementsByClassName("dead")) {
        if (dead.style.backgroundColor == "rgb(153, 247, 148)"){
            console.log("killed");
            dead.remove();
        }
        else{
            dead.classList.remove("dead");
        }
    }
    console.log(tasks);
}

