import uniqueId from 'lodash/uniqueId';

export const listsFormHandler = (e, state) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const value = formData.get('name');

  if(value.trim().length) {
    const newList = { name: value, id: uniqueId() }
    state.activeListId = newList.id;
    state.lists.push(newList)
  }
};

export const tasksFormHandler = (e, state) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const value = formData.get('name');

  if(value.trim().length) {
    const newTask = { name: value, listId: state.activeListId, id: uniqueId() }
    state.tasks.push(newTask)
  }
};

export const listHandler = (e, state, list) => {
  e.preventDefault();
  state.activeListId = list.id;
};

export const taskHandler = (e, state, task) => {
  e.preventDefault();
  state.tasks.forEach(item => {
    if (task.id === item.id) {
      item.status = 'done';
    }
  });
};
