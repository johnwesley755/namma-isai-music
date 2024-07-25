var sidenav = document.querySelector(".side-navbar");
sidenav.style.display = "none";
function showNavbar() {
  sidenav.style.display = "block";
}
function closeNavbar() {
  sidenav.style.display = "none";
}
var btn = document.getElementById("header-btn");
function link(){
  window.location.href="signup.html";
}
