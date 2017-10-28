import {newtask} from '../api/tasks';

const initialState = {
  task: null,
  taskCreated: false
}

export const createTask = (data) => {
	console.log("here in create Task");
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

export default (state = initialState, action) => {
  switch (action.type) {
    case 'task_success':
    console.log("in reducers");
      return {
        ...state, task: action.payload,
        taskCreated: true
      }
    default:
      return state
  }
}
