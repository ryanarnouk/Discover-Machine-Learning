import axios from 'axios';

export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticaed_user';
export const AUTHENTICATION_ERROR = 'authentication_error';


export function signInAction({ email, password }, history){
  return (dispatch) => {
    axios.post('/auth/login', `email=${email}&password=${password}`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    }).then((res) =>{
      console.log(email, password);
      dispatch({ type: AUTHENTICATED });
      localStorage.setItem('user', res.data.token);
      localStorage.setItem('user_name', res.data.user.name);
      // do not know whether to use history.push or window.location
      //history.push('/challenges/regression/1');
      //window.location.href = "/profile";
      window.location.href = "/challenges/regression/1"
      console.log(res);
    }).catch((error) => {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: 'Invalid email or password'
      })
      window.location.reload();
      localStorage.setItem('message', 'Invalid email or password')
    });
  }
}

export function SignUpAction({ name, email, password }, history) {
  return (dispatch) => {
    axios.post('/auth/signup', `name=${name}&email=${email}&password=${password}`, {
      'Content-Type': 'application/x-www-form-urlencoded'
    }).then((res) => {
      window.location.href="/login";
      localStorage.setItem('message', 'You have now successfully signed up, you can now log in!')
      console.log(res);
    }).catch((err) => {
      console.log(err);
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