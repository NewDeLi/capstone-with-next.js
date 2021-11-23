import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqA2EcDZVYqcUqp-jL1huT2pMFE24wg9g",
  authDomain: "decisions-3fadc.firebaseapp.com",
  projectId: "decisions-3fadc",
  storageBucket: "decisions-3fadc.appspot.com",
  messagingSenderId: "3580668348",
  appId: "1:3580668348:web:d0a004d4e82d516162e3b9",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

 export default firebase