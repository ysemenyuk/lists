import { listHandler, taskHandler, listsFormHandler, tasksFormHandler } from './handlers';

export const renderLists = (state) => {
  const listsContainer = document.querySelector('[data-container="lists"]');
  const listsForm = document.querySelector('[data-container="new-list-form"]');

  const ulForLists = document.createElement('ul');

  state.lists
    .forEach((list) => {
      const li = document.createElement('li');
      const nameContainer = document.createElement('a');
      nameContainer.setAttribute('href', `#`);
      nameContainer.innerHTML = list.name;

      if (list.id === state.activeListId) {
        nameContainer.classList.add('text-secondary')
      }

      nameContainer.addEventListener('click', (e) => listHandler(e, state, list));
      li.appendChild(nameContainer);
      ulForLists.appendChild(li);
    });

  listsContainer.innerHTML = '';
  listsContainer.appendChild(ulForLists);
  listsForm.reset();
}

export const renderTasks = (state) => {
  const tasksContainer = document.querySelector('[data-container="tasks"]');
  const tasksForm = document.querySelector('[data-container="new-task-form"]');

  const ulForTasks = document.createElement('ul');

  state.tasks
    .filter(({ listId }) => listId === state.activeListId)
    .forEach((task) => {
      const li = document.createElement('li');
      const nameContainer = document.createElement('a');
      nameContainer.setAttribute('href', `#`);

      if (task.status ==='done') {
        nameContainer.innerHTML = `<del>${task.name}</del>`;
      } else {
        nameContainer.innerHTML = task.name;
      }
           
      nameContainer.addEventListener('click', (e) => taskHandler(e, state, task));
      li.appendChild(nameContainer);
      ulForTasks.appendChild(li);
    });

  tasksContainer.innerHTML = '';
  tasksContainer.appendChild(ulForTasks);
  tasksForm.reset();
}

export const initial = (state) => {
  const listsForm = document.querySelector('[data-container="new-list-form"]');
  const tasksForm = document.querySelector('[data-container="new-task-form"]');

  listsForm.addEventListener('submit', (e) => listsFormHandler(e, state));
  tasksForm.addEventListener('submit', (e) => tasksFormHandler(e, state))

  renderLists(state);
  renderTasks(state);
};
