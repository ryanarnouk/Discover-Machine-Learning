import axios from 'axios';
import regression from '../seed/challenges/regression/lesson.json';
import classification from '../seed/challenges/classification/lesson.json';
import introcoding from '../seed/challenges/introcoding/lesson.json';
import deeplearning from '../seed/challenges/deeplearning/lesson.json';
import reinfocementlearning from '../seed/challenges/reinforcementlearning/lesson.json';

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

// SOCIAL AUTHENTICATION
export function TwitterLoginAction() {
  console.log('hi')
}

// try to make this use history
export function signOutAction(history) {
  console.log('signOutFunction');
  // trying to fix bug that clears all of localstorage
  localStorage.removeItem('user');
  localStorage.removeItem('user_name')
  //   localStorage.clear();
  // only remove the user localstorage if logged out. Need to write code if someone else logs in with different data on server to clear previous user localstorage
  //window.location.href = '/';

  // On logout we want to get all the users completed challenges from localstorage and save it to the server in a json object. then when they sign up we can get those challenges and save it to the localstorage after it is cleared.
  
  console.log(regression.challenges.length);
  var x = {
    introcoding: [

    ], 
    regression: [

    ],
    classification: [

    ],
    deeplearning: [

    ], 
    reinforcementlearning: [

    ]
  }
  for(var i in introcoding.challenges) {
    x.introcoding.push(false)
  }
  for(var i in regression.challenges) {
    x.regression.push(false)
  }
  for(var i in classification.challenges) {
    x.classification.push(false)
  }
  for(var i in deeplearning.challenges) {
    x.deeplearning.push(false)
  }
  for(var i in reinfocementlearning.challenges) {
    x.reinforcementlearning.push(false)
  }
  console.log(x);
  return {
    type: UNAUTHENTICATED
  };
}