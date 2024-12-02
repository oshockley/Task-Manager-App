let tasks = [];

function addTask() {
  const taskInput = document.getElementById('task-input');
  const task = taskInput.value.trim();

  if (task) {
    tasks.push({ name: task, completed: false });
    taskInput.value = '';
    renderTasks();
  }
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task.name;
    if (task.completed) {
      li.classList.add('completed');
    }
    li.addEventListener('click', () => toggleTask(index));
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteTask(index);
    });
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}
