// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd-zbSHaZmtO8kWLSQFYBu8idVC_K6LvA",
  authDomain: "music-player-33ed8.firebaseapp.com",
  projectId: "music-player-33ed8",
  storageBucket: "music-player-33ed8.appspot.com",
  messagingSenderId: "345048447369",
  appId: "1:345048447369:web:9f1aada73b827b32638958",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Event listener for the login form
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("Login successful!");
      window.location.href = "music_player.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
