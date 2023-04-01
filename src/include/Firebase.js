// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/firestore";
import * as firebaseui from 'firebaseui';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8m-cEWNAolDsI3-0L6YKwszc0OVJnT1w",
    authDomain: "advanced-software-engine-4326c.firebaseapp.com",
    databaseURL: "https://advanced-software-engine-4326c-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "advanced-software-engine-4326c",
    storageBucket: "advanced-software-engine-4326c.appspot.com",
    messagingSenderId: "148125485516",
    appId: "1:148125485516:web:ece1d97968a46a5572f569",
    measurementId: "G-4C1JHCL8KR"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = app.firestore();
const auth = firebase.auth();
var ui = new firebaseui.auth.AuthUI(auth);

export { database, firebase, ui };