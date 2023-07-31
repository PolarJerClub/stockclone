import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAPuqy6CYk6B4qAOudCxQNLCY8kgiL_cv8",
    authDomain: "robinhood-c9a20.firebaseapp.com",
    projectId: "robinhood-c9a20",
    storageBucket: "robinhood-c9a20.appspot.com",
    messagingSenderId: "481053577665",
    appId: "1:481053577665:web:5c6921ae8347bee7531f40"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export { db };