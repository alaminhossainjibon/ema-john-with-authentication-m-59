// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwhFwFlF8k2hWLW7Puw9PGBIzB8Hqonz0",
    authDomain: "ema-john-simple-511d3.firebaseapp.com",
    projectId: "ema-john-simple-511d3",
    storageBucket: "ema-john-simple-511d3.appspot.com",
    messagingSenderId: "269017607147",
    appId: "1:269017607147:web:62cdafb82cc6b7375c87ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;