const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () => {
    menu.classList.toggle('bx-x'); // this switches the icon to an "X"
    nav.classList.toggle('active'); // this shows/hides the nav links
}

//function myFunction() {
  //var element = document.body;
  //element.classList.toggle("dark-mode");}

function myFunction() {
  const element = document.body;
  const button = document.getElementById("theme-toggle");
  element.classList.toggle("dark-mode");
  // Toggle the button text based on the current mode
  // If the body has the class "dark-mode", set button text to "Light mode"
  // Otherwise, set it to "Dark mode"

  if (element.classList.contains("dark-mode")) {
    button.textContent = "Gray mode";
  } else {
    button.textContent = "Dark mode";}
  }
