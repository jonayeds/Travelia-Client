// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUUJpcnazhHrhxm43pBoGiNyZf1GetL6E",
  authDomain: "travelia-3186e.firebaseapp.com",
  projectId: "travelia-3186e",
  storageBucket: "travelia-3186e.appspot.com",
  messagingSenderId: "890507502325",
  appId: "1:890507502325:web:450adc4b1637aa5dd6dbbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth