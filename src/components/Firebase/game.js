// logic for game connection with firebase
// utilize realtime database for connection with games
import firebase from 'firebase';

export const NewGame = () => {
  console.log('new game')
  var id = `${Math.floor(Math.random() * 900000) + 100000}`;

  firebase.database().ref('games/' + id).set({
    users: [

    ],
    state: 'waiting'
  });
  return id;
}

export const JoinGame = (a) => {
  // username needs to exist for user to sign up
  const username = localStorage.getItem('user_name');
  let promise = firebase.database().ref('games/' + `${a}`).once('value').then((snapshot) => {
    if (localStorage.getItem('user_name')) {
      if (snapshot.exists()) {
        if(snapshot.val().users) {
          firebase.database().ref('games/' + `${a}` + '/users/' + username).set("0");
        } else {
          // first user [] ES6 and babel function to reference variable
          firebase.database().ref('games/' + `${a}` + '/users').set({[username]: '0'})
        }
      } else {
        return 'This game does not exist.';
      }
    } else {
      return "You must create an account."
    }
  });
  return promise;
}

export const EndGame = (a) => {
  console.log('end game')
  firebase.database().ref('games/' + `${a}`).once('value').then((snapshot) => {
    if (snapshot.exists()) {
      // object exists
      firebase.database().ref('games/' + `${a}`).remove(); // remove instance
    }
  });
}

export const StartGame = (a, callback) => {
  console.log('start game')
  firebase.database().ref('games/' + `${a}`).once('value').then((snapshot) => {
    if (snapshot.exists()) {
      if(snapshot.val().users) {
        var users = snapshot.val().users;
        firebase.database().ref('games/' + `${a}`).set({
          users: users,
          state: 'playing'
        })
      } else {
        return 'No users to start game'
      }
    }
  })
  callback();
}

// client functions


export const DeleteUser = (gameid, username) => {
  // delete the user from the database
  firebase.database().ref('games/' + `${gameid}` + '/users/' + username).remove();
}

export const GetUsers = (a) => {
  let promise = firebase.database().ref('games/' + `${a}`).once('value').then((snapshot) => {
    if (snapshot.exists()) {
      if(snapshot.val().users) {
        return snapshot.val().users.map((a) => {  
          return a
        })
      } else {
        // no users
        return null;
      }
    } else {
      return 'game does not exist';
    }
  })

  return promise;
}

export const onUserConnect = () => {
  // redirect to wait page 
}

// event listeners
export const onNewUser = (a) => {
  // listen for new user
  // rewrite get user code but do not return anything to keep it async
  // maybe cant return because it is on or something ?
  firebase.database().ref('games/' + `${a}`).on('value', (snapshot) => {
    if (snapshot.exists()) {
      if (snapshot.val().users) {
        return snapshot.val().users.map((a) => {
          return a;
        })
      } else {
        return 'no users'
      }
    } else {
      return 'game does not exist'
    }
  }) 
} 

// money system
export const updateMoney = (username, money, gameid) => {
  // update the users money
  firebase.database().ref('games/' + `${gameid}` + '/users/' + username).once('value', (snapshot) => {
    if (snapshot.exists()) {
      firebase.database().ref('games/' + `${gameid}` + '/users/' + username).set(money);
    }
  })
}