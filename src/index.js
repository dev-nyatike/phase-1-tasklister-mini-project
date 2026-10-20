
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#create-task-form');
  const formInput = document.querySelector('#new-task-description');
  const taskList = document.querySelector('#tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskDescription = formInput.value.trim();

    if (taskDescription === '') {
      return;
    }

    const task = document.createElement('li');
    task.textContent = taskDescription;

    taskList.appendChild(task);
    formInput.value = '';
  });
});
