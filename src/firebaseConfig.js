import firebase from 'firebase';

export default function firebaseConfig() {

    var config = {
      apiKey: "AIzaSyAUU-iLJn8goMSaR31lDW3DKXsoMrG3bxM",
      authDomain: "pwa-hackathon-4042d.firebaseapp.com",
      databaseURL: "https://pwa-hackathon-4042d.firebaseio.com",
      projectId: "pwa-hackathon-4042d",
      storageBucket: "pwa-hackathon-4042d.appspot.com",
      messagingSenderId: "1035691895398"
    };
    if(!firebase.apps.length){
      firebase.initializeApp(config);
    }

    return firebase;
};
