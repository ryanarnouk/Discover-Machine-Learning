import axios from 'axios';
import regression from '../seed/challenges/regression/lesson.json';
import classification from '../seed/challenges/classification/lesson.json';
import introcoding from '../seed/challenges/introcoding/lesson.json';
import deeplearning from '../seed/challenges/deeplearning/lesson.json';
import reinforcementlearning from '../seed/challenges/reinforcementlearning/lesson.json';
import qs from 'qs';

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
      localStorage.setItem('email', email);
      // do not know whether to use history.push or window.location
      //history.push('/challenges/regression/1');
      //window.location.href = "/profile";
      //window.location.href = "/challenges/regression/1"
      console.log(res);
      console.log(email);
      axios.get(`/progress/load?email=${localStorage.getItem('email')}`).then((res) => {
        var x = qs.parse(res.data.progress);
        for(var i in x) {
          if (x.hasOwnProperty(i)) {
            for(var a in x[i]) {
              console.log(x[i][a])
              if(x[i][a] === 'true') {
                console.log(`challengecomplete ${x[i]} ${x[i][a]}`)
                localStorage.setItem(`challengecomplete ${x[i]} ${x[i][a]}`, true)
              }
            }
            console.log(x[i])
          }
        }
      }).catch((err) => {
        console.log(err);
      });
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

  // On logout we want to get all the users completed challenges from localstorage and save it to the server in a json object. then when they sign up we can get those challenges and save it to the localstorage after it is cleared.
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
    x.introcoding.push(Boolean(localStorage.getItem('challengecomplete introcoding ' + i)))
  }
  for(var a in regression.challenges) {
    x.regression.push(Boolean(localStorage.getItem('challengecomplete regression ' + a)))
  }
  for(var b in classification.challenges) {
    x.classification.push(Boolean(localStorage.getItem('challengecomplete classification ' + b)))
  }
  for(var c in deeplearning.challenges) {
    x.deeplearning.push(Boolean(localStorage.getItem('challengecomplete deeplearning ' + c)))
  }
  for(var d in reinforcementlearning.challenges) {
    x.reinforcementlearning.push(Boolean(localStorage.getItem('challengecomplete reinforcement ' + d)))
  }

  axios.post(`/progress/save?email=${localStorage.getItem('email')}`, qs.stringify(x)).then((res) => {
    console.log(localStorage.getItem('email'));
    console.log(res);
  }).catch((err) => {
    console.log(err);
  });

  //localStorage.clear();
  //window.location.href = '/';

  console.log(localStorage)

  return {
    type: UNAUTHENTICATED
  };
}