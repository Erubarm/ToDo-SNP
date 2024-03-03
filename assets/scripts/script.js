const main = document.querySelector("main");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
let tasks;
const buttonShowAll = document.getElementById("tasks-show__all");
const buttonShowActive = document.getElementById("tasks-show__active");
const buttonShowComplete = document.getElementById("tasks-show__complete");
const taskCount = document.getElementById("task-count");
const buttonRemoveCompleted = document.getElementById("remove-completed");

// console.log(taskCross);
input.addEventListener("keyup", (event) => {
  if (event.code === "Enter" && input.value !== "") {
    let li = document.createElement("li");
    li.className = "li-inner";
    li.innerHTML = `
        
            <div class="task__input-text">
                <input type="checkbox">
                <p onclick="changeTask(this)">${input.value}</p>
            </div>
            <button class="button__cross" onclick='deleteTask(this)'><img src="assets/icons/cross.svg" alt="cross"></button>
        
        `;
    input.value = "";
    ul.appendChild(li);

    tasks = ul.querySelectorAll("li");
    console.log(tasks);
    
  }
});

function deleteTask(cross) {
  cross.closest(".li-inner").remove();
}

function showAll() {
  tasks.forEach((item) => {
    if (item.classList.contains("hide") == true) {
      item.classList.remove("hide");
    }
  });
}

function showActive() {
  tasks.forEach((item) => {
    if (item.querySelector("input").checked == true) {
      item.classList.add("hide");
    } else {
      item.classList.remove("hide");
    }
  });
}

function showComplete() {
  tasks.forEach((item) => {
    if (item.querySelector("input").checked == false) {
      item.classList.add("hide");
    } else {
      item.classList.remove("hide");
    }
  });
}



function removeCompleted() {
  tasks.forEach((item) => {
    if (item.querySelector("input").checked == true) {
      item.remove();
    }
  });
}


