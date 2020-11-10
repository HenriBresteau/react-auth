import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCM_aj4Pe1SVMR2BJL1kG57KEsOZZSYoUQ",
    authDomain: "react-auth-598b8.firebaseapp.com",
    databaseURL: "https://react-auth-598b8.firebaseio.com",
    projectId: "react-auth-598b8",
    storageBucket: "react-auth-598b8.appspot.com",
    messagingSenderId: "529336066784",
    appId: "1:529336066784:web:103e6645599f94121ee685"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;