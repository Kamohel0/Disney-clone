const firebaseConfig = {
    apiKey: "AIzaSyBj9EQsWUWhDCSiIpT5w5T4X6-KT-p3lCo",
    authDomain: "disneyplus-clone-833dd.firebaseapp.com",
    projectId: "disneyplus-clone-833dd",
    storageBucket: "disneyplus-clone-833dd.firebasestorage.app",
    messagingSenderId: "220238151582",
    appId: "1:220238151582:web:c75184dc55e6338885e08f",
    measurementId: "G-HFTDS7W9JB"
  };
  
  
  const firebaseApp = firebaseConfig.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebaseApp.auth.GoogleAuthProvider();
  