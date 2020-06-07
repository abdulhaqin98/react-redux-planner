import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBAQkvCPpmtM5ah6AobgzG-tHXG0TdXgvw",
  authDomain: "marioplan001-5b79b.firebaseapp.com",
  databaseURL: "https://marioplan001-5b79b.firebaseio.com",
  projectId: "marioplan001-5b79b",
  storageBucket: "marioplan001-5b79b.appspot.com",
  messagingSenderId: "643859921141",
  appId: "1:643859921141:web:d65b426b5c86b89078adbc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;