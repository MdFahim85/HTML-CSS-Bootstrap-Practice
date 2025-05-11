document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("#mainNav");
  const modeButton = document.querySelector("#modeToggle");
  const sunMoon = document.querySelector(".sunMoon");
  const footer = document.querySelector("#footer");
  window.addEventListener("scroll", function () {
    if (window.scrollY > nav.offsetHeight) {
      nav.classList.add("scrolled");
      nav.classList.remove("default");
    } else {
      nav.classList.remove("scrolled");
      nav.classList.add("default");
    }
  });

  modeButton.addEventListener("click", function () {
    modeButton.style.border = "none";
    if (sunMoon.classList.contains("fa-sun")) {
      sunMoon.classList.remove("fa-sun");
      sunMoon.classList.add("fa-moon");
      nav.classList.add("scrolledDark");
      footer.classList.add("scrolledDark");
    } else {
      sunMoon.classList.remove("fa-moon");
      sunMoon.classList.add("fa-sun");
      nav.classList.remove("scrolledDark");
      footer.classList.remove("scrolledDark");
    }
  });
});
