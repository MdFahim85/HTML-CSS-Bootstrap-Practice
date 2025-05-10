document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const nav = document.getElementById("mainNav");
    if (window.scrollY > nav.offsetHeight) {
      nav.classList.add("scrolled");
      nav.classList.remove("default");
    } else {
      nav.classList.remove("scrolled");
      nav.classList.add("default");
    }
  });
});
