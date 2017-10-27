import {credentials} from '../../stub/users';

export function login(data) {
  // api call to hit to backend can be added using axios, request or other http lib.
  // is replaced by the stub data
  const user = credentials.filter((userCred) => {
    userCred.username === data.username.toLowerCase() && userCred.password === data.password;
  });
  if (user.length > 0) {
    return Promise.resolve(user);
  } else {
    return Promise.reject({err: 'User invalid'})
  }
}
