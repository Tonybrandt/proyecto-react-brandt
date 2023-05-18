﻿// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app";
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAEqhDbblXoBoRKZDOmklsrD9EQmD3_dlY",
  authDomain: "jb-maderas.firebaseapp.com",
  projectId: "jb-maderas",
  storageBucket: "jb-maderas.appspot.com",
  messagingSenderId: "124182270644",
  appId: "1:124182270644:web:96a4332cf90f7ffcb5bde1",
  measurementId: "G-3Y7C4YJWLY"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize app
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app)
}