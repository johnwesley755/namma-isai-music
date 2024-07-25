import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getAuth,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBd-zbSHaZmtO8kWLSQFYBu8idVC_K6LvA",
  authDomain: "music-player-33ed8.firebaseapp.com",
  projectId: "music-player-33ed8",
  storageBucket: "music-player-33ed8.appspot.com",
  messagingSenderId: "345048447369",
  appId: "1:345048447369:web:9f1aada73b827b32638958",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.sendResetEmail = function (event) {
  event.preventDefault(); // Prevent form submission
  const email = document.getElementById("email").value;
  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Password reset email sent!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error: ${errorCode}, Message: ${errorMessage}`);
    });
};

document
  .getElementById("resetPasswordForm")
  .addEventListener("submit", sendResetEmail);
