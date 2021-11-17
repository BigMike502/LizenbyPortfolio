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

//Form information
function validateForm() {
    let status = true;
    let x;

    //Test the Name!
    x = document.forms.contactForm.name.value;
    
    if (x===null | x===""){
        status=false;
        document.getElementById('fullName').className = "error"
    }

    return status;
}