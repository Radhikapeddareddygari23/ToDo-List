const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if(taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="completeBtn">✔</button>
      <button class="deleteBtn">✖</button>
    </div>
  `;

  taskList.appendChild(li);

  taskInput.value = "";

  li.querySelector(".completeBtn").addEventListener("click", () => {
    li.querySelector("span").classList.toggle("completed");
  });

  li.querySelector(".deleteBtn").addEventListener("click", () => {
    li.remove();
  });
}