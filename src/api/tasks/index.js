import {find, filter} from 'lodash';

import {task_details} from '../../stub/tasks';

export function newtask(data) {
  // api call to hit to backend can be added using axios, request or other http lib.
  // is replaced by the stub data
  task_details.push(data);
  return Promise.resolve(task_details);
}

export function loadList() {
	return Promise.resolve(task_details);
}

export function statusFilter(tasks, status) {
	return Promise.resolve(filter(tasks, {status}));
}