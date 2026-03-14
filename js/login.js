function toggleMenu(){

let menu = document.getElementById("navMenu");
let auth = document.querySelector(".auth-links-containar");

menu.classList.toggle("active");
auth.classList.toggle("active");
}



function togglePassword() {
    const password = document.getElementById("password");
    const toggle = document.getElementById("toggle");

    if (password.type === "password") {
        password.type = "text";
        toggle.src = "../images/hide.png";
    } else {
        password.type = "password";
        toggle.src = "../images/view.png";
    }
}
