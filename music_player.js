var sidenav = document.querySelector(".side-navbar");
sidenav.style.display = "none";
function showNavbar() {
  sidenav.style.display = "block";
}
function closeNavbar() {
  sidenav.style.display = "none";
}
// script.js
document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = new Audio();
  const playButton = document.querySelector(".controls button:nth-child(2)");
  const prevButton = document.querySelector(".controls button:nth-child(1)");
  const nextButton = document.querySelector(".controls button:nth-child(3)");
  const progressBar = document.querySelector(".progress-bar input");
  const progressTime = document.querySelectorAll(".progress-time span");
  const songListItems = document.querySelectorAll(".top-songs li");
  const currentSongTitle = document.querySelector(".current-song h3");
  const currentSongArtist = document.querySelector(".current-song p");
  const searchInput = document.getElementById("search");
  const searchIcon = document.querySelector(".song-search i");
  const volumeControl = document.getElementById("volume-control");

  let currentSongIndex = 0;
  let isPlaying = false;

  const songs = [
    {
      title: "Uncompromising warrior",
      artist: "Shridhar Ravi",
      src: "birth-of-an-uncompromising-warrior-144040.mp3",
      duration: "01:09",
    },
    {
      title: "Cinematic teaser",
      artist: "Kamalesh Siddu",
      src: "tamil-comedy-bgm-for-reels-and-shorts-139304.mp3",

      duration: "00:35",
    },
    {
      title: "Leo Bloody Sweet",
      artist: "Kamalesh Siddu",
      src: "leo-bloody-sweet-vox-tamil-mass-music-139238.mp3",
      duration: "00:21",
    },
    {
      title: "Love bgm",
      artist: "Kamalesh Siddu",
      src: "love_bgm_no_copyright_music-113843.mp3",
      duration: "00:27",
    },

    {
      title: "News-documentaries-bgm",
      artist: "Kamalesh Siddu",
      src: "news-documentaries-music-indian-118533.mp3",
      duration: "01:10",
    },
    {
      title: "Comedy bgm",
      artist: "Kamalesh Siddu",
      src: "tamil-comedy-bgm-for-reels-and-shorts-139304.mp3",
      duration: "00:35",
    },
    {
      title: "Investigation theme",
      artist: "Prabhat",
      src: "short-film-investication-theme-thriller-killer-horror-bgm-186669.mp3",
      duration: "02:25",
    },
    {
      title: "Horror Theme",
      artist: "Kamalesh Siddu",
      src: "tamil-horror-psychovillan-music-175912.mp3",
      duration: "02:08",
    },
  ];

  function loadSong(songIndex) {
    const song = songs[songIndex];
    audioPlayer.src = song.src;
    currentSongTitle.textContent = song.title;
    currentSongArtist.textContent = song.artist;
    progressTime[1].textContent = song.duration;
  }

  function playSong() {
    audioPlayer.play();
    isPlaying = true;
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
  }

  function pauseSong() {
    audioPlayer.pause();
    isPlaying = false;
    playButton.innerHTML = '<i class="fas fa-play"></i>';
  }

  playButton.addEventListener("click", function () {
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });

  prevButton.addEventListener("click", function () {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
  });

  nextButton.addEventListener("click", function () {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
  });

  audioPlayer.addEventListener("timeupdate", function () {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    progressBar.value = (currentTime / duration) * 100;

    let minutes = Math.floor(currentTime / 60);
    let seconds = Math.floor(currentTime % 60);
    if (seconds < 10) seconds = "0" + seconds;
    progressTime[0].textContent = `${minutes}:${seconds}`;
  });

  progressBar.addEventListener("input", function () {
    const duration = audioPlayer.duration;
    audioPlayer.currentTime = (progressBar.value / 100) * duration;
  });

  songListItems.forEach((item, index) => {
    item.addEventListener("click", function () {
      currentSongIndex = index;
      loadSong(currentSongIndex);
      playSong();
    });
  });
  // Play or pause audio

  // Volume control
  volumeControl.addEventListener("input", (e) => {
    audioPlayer.volume = e.target.value;
  });

  searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();
    songListItems.forEach((item, index) => {
      const title = songs[index].title.toLowerCase();
      if (title.includes(query)) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  });

  loadSong(currentSongIndex);
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
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
const auth = getAuth(app);

// Event listener for the signup form
const signoutForm = document.getElementById("sign-out");
signoutForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const auth = getAut();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      window.href.location = "index.html";
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
});
