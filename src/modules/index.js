import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth from './auth'
import tasks from './tasks';

export default combineReducers({
  router: routerReducer,
  auth,
  tasks
})
