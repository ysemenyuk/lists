import onChange from 'on-change';
import uniqueId from 'lodash/uniqueId';

import { renderLists, renderTasks, initial } from './renders';

const app = () => {

  const list1Id = uniqueId();
  const task1Id = uniqueId();
  const task2Id = uniqueId();

  const state = {
    activeListId: list1Id,
    lists: [{ name: 'list1', id: list1Id }],
    tasks: [{ name: 'task11', listId: list1Id, id: task1Id }, { name: 'task12', listId: list1Id, id: task2Id }],
    stateUi: [{ id: task1Id, satus: 'done' }, { id: task2Id }],
  };

  const watched = onChange(state, (path, value) => {
    if (path === 'lists') {
      renderLists(watched);
    } else if (path === 'tasks') {
      renderTasks(watched);
    } else if (path === 'activeListId') {
      renderLists(watched);
      renderTasks(watched);
    }
  });

  initial(watched);
};

app();
