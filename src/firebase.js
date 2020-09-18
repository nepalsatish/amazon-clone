import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyClkbesg2uBYLfbs4lt70gxth990xs5hBY",
  authDomain: "clone-7be05.firebaseapp.com",
  databaseURL: "https://clone-7be05.firebaseio.com",
  projectId: "clone-7be05",
  storageBucket: "clone-7be05.appspot.com",
  messagingSenderId: "423731548318",
  appId: "1:423731548318:web:cecb0657a1edd754f4eb8f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
