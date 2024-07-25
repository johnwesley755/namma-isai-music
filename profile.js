// Correcting the way to get the element by ID

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import {
  getAuth,
  onAuthStateChanged,
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
const db = getFirestore(app);
const auth = getAuth(app);

const profileForm = document.getElementById("profile-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phone = document.getElementById("profile-phone");
const city = document.getElementById("profile-city");
const state = document.getElementById("profile-state");
const country = document.getElementById("profile-country");
const dob = document.getElementById("profile-dob");
const updateModal = document.getElementById("updateModal");
const closeModalBtn = document.getElementsByClassName("close")[0];

let currentUser = null;

onAuthStateChanged(auth, async (user) => {
  if (user) {
    currentUser = user;
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      username.value = userData.username;
      email.value = userData.email;
      phone.value = userData.phone;
      city.value = userData.city;
      state.value = userData.state;
      country.value = userData.country;
      dob.value = userData.dob;
    }
  } else {
    alert("No user is signed in");
  }
});

profileForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    if (currentUser) {
      const userRef = doc(db, "users", currentUser.uid);
      await updateDoc(userRef, {
        username: username.value,
        email: email.value,
        phone: phone.value,
        city: city.value,
        state: state.value,
        country: country.value,
        dob: dob.value,
      });
      showModal();
    }
    alert("Profile updated successfully");
  } catch (error) {
    console.error("Error updating profile: ", error);
  }
});

function showModal() {
  updateModal.style.display = "block";
}

function closeModal() {
  updateModal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == updateModal) {
    updateModal.style.display = "none";
  }
};
