// Toggle menu
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Scroll-up button
const scrollUpBtn = document.querySelector(".scroll-up-btn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
});

scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
