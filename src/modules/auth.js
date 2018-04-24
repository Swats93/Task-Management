import {login} from '../api/auth';

const initialState = {
  err: null,
  isLoggedIn: false,
  user: null
}

export const loginUser = (data) => {
  return dispatch => {
    login(data).then((user) => {
      console.log("user details", user);
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
  console.table(action.payload);
  switch (action.type) {
    case 'login_success':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload
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
