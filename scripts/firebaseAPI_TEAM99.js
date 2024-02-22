//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyDirD8NLUBdbdGVpLnHIMcqMQkvk5orGPg",
  authDomain: "comp1800-demo-441c9.firebaseapp.com",
  projectId: "comp1800-demo-441c9",
  storageBucket: "comp1800-demo-441c9.appspot.com",
  messagingSenderId: "717538470846",
  appId: "1:717538470846:web:bc64fccca9b558d1d8e7ef",
  measurementId: "G-L0S73W7TY7"
  };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
