function grow(){
    document.getElementById("screen").style.height = "100vh"
    document.getElementById("btn2").style.display = "inline"
    document.getElementById("search").style.display = "inline"
    document.body.style.overflow = "hidden"
}
function shrink(){
    document.getElementById("screen").style.height = "0vh"
    document.getElementById("btn2").style.display = "none"
    document.getElementById("search").style.display = "none"
    document.body.style.overflow = "scroll"
}


// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyy()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = 20;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyy() {
  if (window.pageYOffset >= sticky) {
    navbar.style.background = "#F0F0F0";
  } else {
    navbar.style.background = "none";
  }
}

  AOS.init();
