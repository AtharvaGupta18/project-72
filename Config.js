import * as firebase from 'firebase';

require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyBO00pipn-RnOpO3TD6Pg_XKrAJPmruKd8",
    authDomain: "project-72-b7b8a.firebaseapp.com",
    projectId: "project-72-b7b8a",
    storageBucket: "project-72-b7b8a.appspot.com",
    messagingSenderId: "488117957905",
    appId: "1:488117957905:web:f9db16a3f16c5d673f48b0"
  };

  firebase.initializeApp(firebaseConfig);
export default firebase.firestore() 