import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB14zYDlbTyM7L6Lw27oHVTt-lkiCFpAIA",
  authDomain: "nodatabase-ea8fd.firebaseapp.com",
  projectId: "nodatabase-ea8fd",
  storageBucket: "nodatabase-ea8fd.appspot.com",
  messagingSenderId: "193167749709",
  appId: "1:193167749709:web:aa45c1f4f7f06154a42204",
  measurementId: "G-DBB25K4W67"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;
