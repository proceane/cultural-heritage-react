import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBSBdvvzT0xLv4OrXuxcBYGnC7aL0xev3Q",
    authDomain: "cultural-heritage-71c69.firebaseapp.com",
    databaseURL: "https://cultural-heritage-71c69-default-rtdb.firebaseio.com",
    projectId: "cultural-heritage-71c69",
    storageBucket: "cultural-heritage-71c69.appspot.com",
    messagingSenderId: "141681582514",
    appId: "1:141681582514:web:1718f01c442210d49bc4ab",
    measurementId: "G-99CTZRYZFG"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();

export const SESSION = firebase.auth.Auth.Persistence.SESSION;

export default app;