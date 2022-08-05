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
    const verifyEmail = /\S+@\S+\.\S+/
    let x;
//Checking the Name
    x = document.forms.contactForm.name.value;
      
    if (x===null | x===""){
        status=false;
        document.getElementById('fullName').className = "error";
    } else {
        document.getElementById('fullName').classList.remove("error");
        localStorage.setItem('customerName', x)
    }
//Checking the email
    x = document.forms.contactForm.email.value;

    if (verifyEmail.test(x)===false){
        status=false;
        document.getElementById('email').className = "error";
    } else {
        document.getElementById('email').classList.remove("error");
    }
//checking the message
    x = document.forms.contactForm.message.value.length;

    if (x<=9){
        status=false;
        document.getElementById('message').className = "error";
    } else {
        document.getElementById('message').classList.remove("error");
    }

    return status;
};

//name script to load the name into <span> inner text on thankyou.html line 50.
function finalName() {
    let spn = document.querySelector("#nameFinal");
    let x = localStorage.getItem('customerName');
    spn.innerHTML = x;
}