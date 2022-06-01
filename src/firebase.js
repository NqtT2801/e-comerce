import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5bjeE5sy9kCVZXkbFSEOEY5cQRtUjD_g",
  authDomain: "ecommerce-website-dcd41.firebaseapp.com",
  projectId: "ecommerce-website-dcd41",
  storageBucket: "ecommerce-website-dcd41.appspot.com",
  messagingSenderId: "513165172180",
  appId: "1:513165172180:web:5fe6917360f4a85008ca41",
  measurementId: "G-H24L8XSB73",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth };
