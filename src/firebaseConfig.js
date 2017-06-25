/* eslint-disable */
import firebase from 'firebase';

class FirebaseConfig {
  constructor() {
    var config = {
      apiKey: 'AIzaSyAUU-iLJn8goMSaR31lDW3DKXsoMrG3bxM',
      authDomain: 'pwa-hackathon-4042d.firebaseapp.com',
      databaseURL: 'https://pwa-hackathon-4042d.firebaseio.com',
      projectId: 'pwa-hackathon-4042d',
      storageBucket: 'pwa-hackathon-4042d.appspot.com',
      messagingSenderId: '1035691895398'
    };

    if(!firebase.apps.length){
      firebase.initializeApp(config);
    }

    this.firebase = firebase;
    // this.adm = ['fGOO9EyEbEWSaqejwup8iRxxEy53'];
  }

  GetCurrentUser() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if(user) {
          //set users to DB
          firebase.database().ref('/users').child(user.uid).set({
            displayName : user.displayName,
            email : user.email,
            photoURL : user.photoURL,
            providerId : user.providerData[0].providerId,
            uid : user.uid,
          });

          resolve(user);
        }
      });
    });
  }

  SignOut() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }

  FacebookAuth() {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('email');
    firebase.auth().signInWithRedirect(provider);

    firebase.auth().getRedirectResult().then((result) => {
      if (result.credential) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;

      return user;
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.log(errorCode, errorMessage);
    });
  }
}

export default FirebaseConfig;
