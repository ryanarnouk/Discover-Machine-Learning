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
  let promise = firebase.database().ref('games/' + `${a}`).once('value').then((snapshot) => {
    if (snapshot.exists()) {
      if(snapshot.val().users) {
        // second user
        var newUser = snapshot.val().users;
        newUser.push({'test3': '0'});
        firebase.database().ref('games/' + `${a}`).set({
          users: newUser,
          state: 'waiting'
        })
      } else {
        // first user
        firebase.database().ref('games/' + `${a}`).set({
          users: [
            {'test1': '0'}
          ],
          state: 'waiting'
        })
      }
    } else {
      return 'This game does not exist.';
    }
  });

  return promise
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


export const DeleteUser = () => {

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