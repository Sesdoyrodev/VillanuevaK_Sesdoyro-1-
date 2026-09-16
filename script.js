const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton) {
  menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
}

const forms = document.querySelectorAll("form");
forms.forEach(function(form){
  form.addEventListener("submit", function(event){
    event.preventDefault();

    if (window.location.pathname.toLowerCase().includes("login.html")) {
      alert("You have logged in successfully!");
    } else {
      alert("Thank you! Your message has been submitted.");
    }

    form.reset();
  });
});

// Sound effects & toggle
const soundToggle = document.getElementById("soundToggle");
const clickSound = document.getElementById("clickSound");
let soundOn = true;

if (soundToggle && clickSound) {
  soundToggle.addEventListener("click", function () {
    soundOn = !soundOn;
    soundToggle.textContent = soundOn ? "🔊 Sound On" : "🔇 Sound Off";
  });

  document.querySelectorAll(".btn, .nav-links a, .menu-btn").forEach(function(element){
    element.addEventListener("click", function(){
      if (soundOn) {
        clickSound.currentTime = 0;
        clickSound.play().catch(function(){});
      }
    });
  });
}