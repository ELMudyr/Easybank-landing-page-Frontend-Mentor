const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const menu = document.getElementById("menu");
const menuSlide = document.getElementById("menuSlide");

menuOpen.addEventListener("click", () => {
  menuOpen.classList.add("hidden");
  menuClose.classList.remove("hidden");
  menu.classList.remove("hidden");
});
menuClose.addEventListener("click", () => {
  menuClose.classList.toggle("hidden");
  menuOpen.classList.remove("hidden");
  menu.classList.add("hidden");
});
