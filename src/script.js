// script.js

let taskList = document.getElementById('task-list-ul');
let addTaskForm = document.getElementById('add-task-form');
let addTaskBtn = document.getElementById('add-task-btn');
let tasks = [];

addTaskBtn.addEventListener('click', addTask);

function addTask(e) {
  e.preventDefault();
  let taskName = document.getElementById('task-name').value;
  let taskDescription = document.getElementById('task-description').value;
  let taskDeadline = document.getElementById('task-deadline').value;
  let newTask = { name: taskName, description: taskDescription, deadline: taskDeadline };
  tasks.push(newTask);
  displayTasks();
  addTaskForm.reset();
}

function displayTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    let taskListItem = document.createElement('li');
    taskListItem.textContent = `${task.name} - ${task.description} - ${task.deadline}`;
    let taskActions = document.createElement('div');
    taskActions.className = 'task-actions';
    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      editTask(index);
    });
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      deleteTask(index);
    });
    taskActions.appendChild(editBtn);
    taskActions.appendChild(deleteBtn);
    taskListItem.appendChild(taskActions);
    taskList.appendChild(taskListItem);
  });
}

function editTask(index) {
  let task = tasks[index];
  document.getElementById('task-name').value = task.name;
  document.getElementById('task-description').value = task.description;
  document.getElementById('task-deadline').value = task.deadline;
  addTaskBtn.textContent = 'Update Task';
  addTaskBtn.removeEventListener('click', addTask);
  addTaskBtn.addEventListener('click', () => {
    updateTask(index);
  });
}

function updateTask(index) {
  let task = tasks[index];
  task.name = document.getElementById('task-name').value;
  task.description = document.getElementById('task-description').value;
  task.deadline = document.getElementById('task-deadline').value;
  displayTasks();
  addTaskBtn.textContent = 'Add Task';
  addTaskBtn.removeEventListener('click', updateTask);
  addTaskBtn.addEventListener('click', addTask);
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

displayTasks();