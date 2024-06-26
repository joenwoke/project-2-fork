/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
/*
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
*/

function init(){
  var x = document.getElementsByClassName('icon')[0];
  
  function myFunction() {
    var menu = document.getElementsByClassName('myLinks')[0];
    
    if (menu.style.display == "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }

  x.addEventListener("click", myFunction);

  showSlides();
}

window.addEventListener('load', init)

let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 15000); // Change image every 5 seconds
}
