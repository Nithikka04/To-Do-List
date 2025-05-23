function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = taskText;

  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttons');

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✔';
  completeBtn.className = 'complete-btn';
  completeBtn.onclick = () => li.classList.toggle('completed');

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✖';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = () => li.remove();

  buttonsDiv.appendChild(completeBtn);
  buttonsDiv.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(buttonsDiv);

  document.getElementById('taskList').appendChild(li);
  taskInput.value = '';
}
