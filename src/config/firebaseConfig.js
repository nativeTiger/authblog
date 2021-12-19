import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCIwaC5uM1aQqf12BMNoLy25TTaJ1uLlSY",
  authDomain: "authsystem-314802.firebaseapp.com",
  projectId: "authsystem-314802",
  storageBucket: "authsystem-314802.appspot.com",
  messagingSenderId: "954471072831",
  appId: "1:954471072831:web:16df13525e692b6859248a",
  measurementId: "G-MZHG25P26V",
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true, merge: true });
export default firebase;
