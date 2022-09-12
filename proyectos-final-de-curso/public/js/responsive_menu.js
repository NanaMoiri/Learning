const navBarDesktop = document.querySelector(".nav-bar-desktop");
const navBarDesktopClone = navBarDesktop.cloneNode(true);
navBarDesktopClone.classList.remove("nav-bar-desktop", "nav-bar-expand-xl", "nav-bar-expand-m", "nav-bar-expand-s");
navBarDesktopClone.classList.add("nav-bar-responsive", "responsive_bar_fondo");
const remover_logo = navBarDesktopClone.getElementsByTagName("li");
remover_logo[3].remove();
// añadir el clon del nav despues de div "nav-bar"
const navBar = document.querySelector(".nav-bar");
navBar.parentNode.insertBefore(navBarDesktopClone, navBar.nextSibling);
const navBarResponsive = document.querySelector(".nav-bar-responsive");
navBarResponsive.classList.add("d-none");

// burger click 
const burger = document.querySelector(".burger");
burger.classList.add("d-none");
burger.addEventListener("click", () => {
  navBarResponsive.classList.toggle("d-none");
});

// gestion displays desktop/responsive y ocultar nav-bar-responsive cuando pasamos a desktop 
const navBarExpandXl = navBarDesktop.classList.contains("nav-bar-expand-xl");
const navBarExpandM = navBarDesktop.classList.contains("nav-bar-expand-m");
const navBarExpandS = navBarDesktop.classList.contains("nav-bar-expand-s");
displayToggleNavBar();
function displayToggleNavBar() {
  burger.classList.add("d-none");
  navBarDesktop.style.display = "contents";
  // gestion displays desktop/responsive
  if (window.innerWidth < 1200 && navBarExpandXl) {
    burger.classList.remove("d-none");
    navBarDesktop.style.display = "none";
  }
  if (window.innerWidth < 768 && navBarExpandM) {
    burger.classList.remove("d-none");
    navBarDesktop.style.display = "none";
  }
  if (window.innerWidth < 576 && navBarExpandS) {
    burger.classList.remove("d-none");
    navBarDesktop.style.display = "none";
  }
  // ocultar nav-bar-responsive cuando pasamos a desktop
  if (window.innerWidth > 1200 && navBarExpandXl || window.innerWidth > 768 && navBarExpandM || window.innerWidth > 576 && navBarExpandS) {
    navBarResponsive.classList.add("d-none");
  }
}
window.addEventListener("resize", () => {
  displayToggleNavBar();
});