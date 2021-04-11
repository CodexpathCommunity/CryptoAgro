import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwNm82uRA7ermiPKv9lNNRdpmcTiq15iE",
  authDomain: "cryptoagrio.firebaseapp.com",
  projectId: "cryptoagrio",
  storageBucket: "cryptoagrio.appspot.com",
  messagingSenderId: "604186870240",
  appId: "1:604186870240:web:46c804e19146e459a4ab85",
  measurementId: "G-MC4CBKEY8M"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
