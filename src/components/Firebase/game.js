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
  console.log('join game')
  // change id to what users types in
  firebase.database().ref('games/' + `${a}`).once('value').then((snapshot) => {
    if (snapshot.exists()) {
      if(snapshot.val().users) {
        var newUser = snapshot.val().users;
        newUser.push({'test3': '0'});
        //.push returns 2 for some reason and not pushed value
        firebase.database().ref('games/' + `${a}`).set({
          users: newUser,
          state: 'waiting'
        })
      } else {
        firebase.database().ref('games/' + `${a}`).set({
          users: [
            {'test1': '0'}
          ],
          state: 'waiting'
        })
      }
    }
  });
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
