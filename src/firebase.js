import firebase from "firebase/compat/app"; 
import "firebase/compat/auth"; 
import "firebase/compat/firestore"; 
import "firebase/compat/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyBj9EQsWUWhDCSiIpT5w5T4X6-KT-p3lCo",
  authDomain: "disneyplus-clone-833dd.firebaseapp.com",
  projectId: "disneyplus-clone-833dd",
  storageBucket: "disneyplus-clone-833dd.appspot.com",
  messagingSenderId: "220238151582",
  appId: "1:220238151582:web:c75184dc55e6338885e08f",
  measurementId: "G-HFTDS7W9JB"
};

// Initialize Firebase using Firebase v8-compatible syntax
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
