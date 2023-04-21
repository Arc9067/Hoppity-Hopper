const toggle_btn = document.querySelector(".nav-toggle");
const nav_ul = document.querySelector(".nav-ul");
const loading = document.querySelector("#loading");
const header = document.querySelector(".header");

AOS.init({
  disable: false,
  startEvent: "load",
  initClassName: "aos-init",
  offset: 120,
  delay: 0,
  duration: 1000,
  easing: "ease",
  anchorPlacement: "top-bottom",
});

toggle_btn.addEventListener("click", () => {
  toggle_btn.classList.toggle("open");
  nav_ul.classList.toggle("open");
  header.classList.toggle("open");
});

window.addEventListener("load", () => {
  loading.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  var indcCarousel = document.querySelector("#indc-carousel");
  var carousel = new bootstrap.Carousel(indcCarousel, {
    interval: 3000, // Change the interval time in milliseconds
    pause: "hover", // Pause on hover
  });
});
