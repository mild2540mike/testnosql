import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCOIZy60x3FSDhRdGeOP7ecQLjHL_2hSgw",
    authDomain: "fir-crud-b0975.firebaseapp.com",
    projectId: "fir-crud-b0975",
    storageBucket: "fir-crud-b0975.appspot.com",
    messagingSenderId: "398799064682",
    appId: "1:398799064682:web:8c39cc47ddca0196da4413",
    measurementId: "G-YNYR5NQCBC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;