//hamburgerbtn
function toggleMenu() {
    document.getElementById("primary-nav").classList.toggle("open");
}
let x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu; 

//closes the hamburger menu when menu item is clicked
function closeMenu() {
    document.getElementById("primary-nav").classList.remove("open");
}
