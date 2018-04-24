import {newtask, loadList, statusFilter} from '../api/tasks';

const initialState = {
  task: null,
  taskCreated: false,
  taskList: [],
  filteredtask: []
}

export const createTask = (data) => {
  return dispatch => {
    newtask(data).then((task_details) => {
    	console.log("return from new task");
      dispatch({
        type: 'task_success',
        payload: task_details
      })
    })
  }
}

export function loadTaskList() {
  return dispatch => {
    loadList().then((taskList) => {
      dispatch({
        type: 'list_load_success',
        payload: taskList
      })
    })
  }
}

export function filterTask(status) {
  return dispatch => {
    statusFilter(this.initialState.taskList,status).then((filteredtask) => {
      dispatch({
        type: 'filtered_task_success',
        payload: filteredtask
      })
    })
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'task_success':
    console.log("in reducers");
      return {
        ...state, task: action.payload,
        taskCreated: true
      }
    case 'list_load_success': 
      return {
        ...state, taskList: action.payload
      }
    case 'filtered_task_success':
      return {
        ...state, filteredtask: action.payload
      }
    default:
      return state
  }
}
