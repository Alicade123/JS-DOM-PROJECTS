const task_form = document.getElementById("task-form");
const task_input = document.getElementById("task-input");

const task_section = document.getElementById("task-section");
const task_list = document.getElementById("task-list");

const clear_tasks = document.getElementById("clear-tasks");
const task_count = document.getElementById("task-count");

//saveTaks to localStorage
function saveTasks() {
  const tasks = [];
  task_list.querySelectorAll("li").forEach((li) => {
    // li.firstChild.textContent gets only the text, not the button
    tasks.push(li.firstChild.textContent.trim());
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
//load data from local storage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((taskText) => {
    const task = document.createElement("li");
    task.classList.add("task-item");
    task.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Me";
    task.appendChild(deleteButton);

    task_list.append(task);
  });
  totalTask();
  saveTasks();
}

//Task 1: Add Task
task_form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (task_input.value.trim().length === 0) alert("Please enter a task");
  else {
    const task = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Me";
    task.classList.add("task-item");
    task.textContent = task_input.value;
    task.appendChild(deleteButton);
    task_list.append(task);
    task_input.value = "";
    totalTask();
    saveTasks();
  }
});

// //Delete task
task_list.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
    totalTask();
    saveTasks();
  }
});

//TotalTasks
function totalTask() {
  const numberOfTasks = task_list.children.length;
  task_count.textContent = `Total Tasks: ${numberOfTasks}`;
}

clear_tasks.addEventListener("click", () => {
  task_list.textContent = "";
  totalTask();
  saveTasks();
});

//Mark task as completed
task_list.addEventListener("click", function (evt) {
  if (evt.target.tagName === "LI") {
    evt.target.classList.toggle("completed");
    saveTasks();
  }
});

loadTasks();
