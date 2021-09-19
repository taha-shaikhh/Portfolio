const selectElement = (s) => document.querySelector(s);

const navLinks = document.querySelectorAll("navlinks");
const icon = selectElement(".menu-icon");

icon.addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");
    icon.classList.toggle("active");
 
})
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }