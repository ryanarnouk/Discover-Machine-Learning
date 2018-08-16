import axios from 'axios';

export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticaed_user';
export const AUTHENTICATION_ERROR = 'authentication_error';

export function signInAction({ email, password }, history){
  return (dispatch) => {
    axios.post('http://localhost:3001/auth/login', `email=${email}&password=${password}`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    }).then((res) =>{
      console.log(email, password);
      dispatch({ type: AUTHENTICATED });
      localStorage.setItem('user', res.data.token);
      localStorage.setItem('user_name', res.data.user.name);
      // do not know whether to use history.push or window.location
      history.push('/challenges/regression/1');
      //window.location.href = "/profile";
      console.log('worked!');
    }).catch((error) => {
      console.log(error);
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: 'Invalid email or password'
      })
      console.log('didnt work');
    });
  }
}

export function SignUpAction({ name, email, password }, history) {
  return (dispatch) => {
    axios.post('http://localhost:3001/auth/signup', `name=${name}&email=${email}&password=${password}`, {
      'Content-Type': 'application/x-www-form-urlencoded'
    }).then((res) => {
      dispatch({ type: AUTHENTICATED });
      localStorage.setItem('user', res.data.token);
      localStorage.setItem('userinfo', res.data);
      //window.location.href="/dashboard";
    }).catch((err) => {
      console.log(err.response);
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: err.response.data.message
      })
    });
  }
}

// try to make this use history
export function signOutAction(history) {
  console.log('signOutFunction');
  localStorage.clear();
  window.location.href = '/';
  return {
    type: UNAUTHENTICATED
  };
}