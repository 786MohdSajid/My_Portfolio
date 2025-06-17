const menuBar = document.querySelector('#menu');
const navBar = document.querySelector('.nav-bar');
menuBar.onclick=()=>{
  menuBar.classList.toggle("bx-x");
  navBar.classList.toggle("active");

}

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  alert("Your message has been sent successfully!");
  this.reset(); 
});
