import {login} from '../api/auth';

const initialState = {
  err: null,
  isLoggedIn: false,
  user: null
}

export const loginUser = (data) => {
  return dispatch => {
    login(data).then((user) => {
      dispatch({
        type: 'login_success',
        payload: user
      })
    }).catch(({err}) => {
      dispatch({
        type: 'login_failed',
        payload: err
      })
    })
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'login_success':
      return {
        ...state, user: action.payload,
        isLoggedIn: true
      }

    case 'login_failed':
      return {
        ...state,
        isLoggedIn: false,
        err: action.payload
      }

    default:
      return state
  }
}
