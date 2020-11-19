//--------------------
// navbar and sections
//--------------------

// code was refactored to go to a specific section

const navSelect = document.getElementById('navBar');

navSelect.addEventListener('click',function(e){
  let newName = e.target.className.slice(7) // as the specific name of the bike starts from the 7th character
  let contactNewLoc = document.getElementById(newName);
  contactNewLoc.scrollIntoView();
});

//--------------------
// back to top button
//--------------------

// below code was taken and adapted from w3school
//https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

mybutton = document.getElementById("myBtn");
myNav = document.getElementById("navBar");

window.onscroll = function() {scrollFunction()};
// window.onmousemove = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    myNav.style.display = "flex";
    setTimeout (function(){
      mybutton.style.display = "none";
      myNav.style.display = "none";
    }, 10000);
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  mybutton.style.display = "block";
  myNav.style.display = "flex";
}

function timedbutton() {
  const x = document.getElementById("myBtn");
  setTimeout(function(){x.style.display = "none"}, 10000);
}

myNav.addEventListener("mouseover", function(event) {
  myNav.style.display = "flex";
},false);

document.onclick = function(e) {
  mybutton.style.display = "block";
  myNav.style.display = "flex";
  // let coords = e.clientX + ":" + e.clientY;
  // console.log(coords);
}
