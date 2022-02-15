import tasks from './tasks';

const dynamicHandlers = (() => {

  const taskWindow = document.getElementById('task-window');

  function redrawTasks() {
    clearTaskWindow();
    tasks.taskList.forEach(createTaskMarkup);
  }

  function clearTaskWindow() {
    let displayedTasks = taskWindow.querySelectorAll('.task-item');
    displayedTasks.forEach(task => {
      task.remove();
    });
  }

  function createTaskMarkup(task, i) {
    let markup = `
      <div id="task-item-${i}" class="task-item">
        <div class="task-main">
          <div class="flex-1">
            <div id="task-title-${i}" class="task-title"></div>
            <p id="task-details-${i}"></p>
          </div>
          <div class="task-btns">
            <button id="star-task-btn-${i}">
              <svg id="star-icon-${i}" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="fill: none; stroke: currentColor;">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </button>
            <button id="edit-task-btn-${i}">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
            <button id="delete-task-btn-${i}">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
        <div id="task-sub" class="task-sub">
          <p id="task-due-date-${i}" class="task-due-date"></p>
          <p id="task-mod-date-${i}"></p>
        </div>
      </div>`;

    taskWindow.insertAdjacentHTML('beforeend', markup);

    let details = document.createTextNode(task.details);
    let title = document.createTextNode(task.title);
    let dueDate = document.createTextNode('Due Date: ' + task.dueDateString);
    let modifiedDate = document.createTextNode('Last Modified: ' + task.modifiedDateString);

    document.getElementById(`task-details-${i}`).appendChild(details);
    document.getElementById(`task-title-${i}`).appendChild(title);
    document.getElementById(`task-due-date-${i}`).appendChild(dueDate);
    document.getElementById(`task-mod-date-${i}`).appendChild(modifiedDate);
    
    if (task.isStarred) {
      changeStarColor(document.getElementById(`star-icon-${i}`));
    }

    document.getElementById(`delete-task-btn-${i}`).addEventListener('click', () => {
      tasks.deleteTask(i);
      redrawTasks();
    });
    
    document.getElementById(`star-task-btn-${i}`).addEventListener('click', () => {
      task.toggleStarred();
      changeStarColor(document.getElementById(`star-icon-${i}`));
    });
  }

  function changeStarColor(star) {
    if (star.style.fill === 'none') {
      star.style.fill = '#34d399';
      star.style.stroke = '#34d399';
    } else {
      star.style.fill = 'none';
      star.style.stroke = 'currentColor';
    }
  }

  return {
    redrawTasks,
  }

})();

export default dynamicHandlers;