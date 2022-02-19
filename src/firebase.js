import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyC4YUIMn9qowHZSQ81EoZAZQ-6nX4t7BHw",
    authDomain: "unichat-adbff.firebaseapp.com",
    projectId: "unichat-adbff",
    storageBucket: "unichat-adbff.appspot.com",
    messagingSenderId: "440340016096",
    appId: "1:440340016096:web:09770e20a47beab9e2d985"
  }).auth();

