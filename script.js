// Get the button element
const toggleModeButton = document.getElementById("toggleMode");
const bgPicture = document.getElementById("bgPicture");

// Add an event listener for button click
toggleModeButton.addEventListener("click", function () {
  // Toggle the dark mode class on the body element
  document.body.classList.toggle("dark-mode");

  // Toggle the dark mode class on the background picture element
  bgPicture.classList.toggle("dark-mode-image");
});
