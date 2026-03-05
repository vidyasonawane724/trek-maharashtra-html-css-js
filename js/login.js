document.getElementById("loginForm").addEventListener("submit",function(e){

e.preventDefault();

let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

let storedUser=JSON.parse(localStorage.getItem("user"));

if(storedUser && email===storedUser.email && password===storedUser.password){

alert("Login Successful");

window.location.href="trek.html";

}else{

alert("Invalid Email or Password");

}

});