import {find} from 'lodash';

import {task_details} from '../../stub/tasks';

export function newtask(data) {
  // api call to hit to backend can be added using axios, request or other http lib.
  // is replaced by the stub data
  task_details.push(data);
  console.log("data", data);
  console.log("task", task_details);
  return Promise.resolve(task_details);
}
