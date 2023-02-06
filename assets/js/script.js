// Hamburger
const hamburger = document.getElementById("hamburger");
function openHamburger() {
  if ((hamburger.style.display = "none")) {
    hamburger.style.display = "unset";
  }
}
function closeHamburger() {
  if ((hamburger.style.display = "unset")) {
    hamburger.style.display = "none";
  }
}
