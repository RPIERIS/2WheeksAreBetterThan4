//--------------------
// navbar and sections
//--------------------

// code was refactored to go to a specific section
// via the nave items

const navSelect = document.getElementById('navBar');

navSelect.addEventListener('click',function(e){
  let newName = e.target.className.slice(7) // as the specific name of the bike starts from the 7th character
  let contactNewLoc = document.getElementById(newName);
  contactNewLoc.scrollIntoView();
});

//----------------------------------
// back to top button & Hide Navbar
//----------------------------------

// below code was taken and adapted from w3school
//https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

mybutton = document.getElementById("myBtn");
myNav = document.getElementById("navBar");

window.onscroll = function() {scrollFunction()};
// the below cose was commented out as it beame unstable
// further clarity is needed in how the bubbling works
// window.onmousemove = function() {scrollFunction()};
// the timeout was not firing correctly

function scrollFunction() {
  if (window.scrollY >= 44) {
    mybutton.style.display = "block";
    myNav.style.display = "flex";
    // setTimeout (function(){
    //   mybutton.style.display = "none";
    //   myNav.style.display = "none";
    // }, 10000);
  } else {
    mybutton.style.display = "none";
    myNav.style.display = "flex";
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

// change navigation style on scroll
window.addEventListener('scroll', event => {
  let nav = document.querySelector('.navbar');
  // console.log(nav);
  (window.scrollY >= 44) ? nav.classList.add('scroll') : nav.classList.remove('scroll');
})

// active navigation on scroll
window.addEventListener('scroll', event => {
  let navigationLinks = document.querySelectorAll('nav div');
  console.log(navigationLinks);
  let fromTop = window.scrollY;

  navigationLinks.forEach(link => {
    let section = document.querySelector(link.classList);
    console.log(section);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  })
})

// --------------------------------
// show nav & button on mouse click
// --------------------------------

document.onclick = function(e) {
  mybutton.style.display = "block";
  myNav.style.display = "flex";
}

// ----------------------------------------
// display section on navbar when scrolling
// ----------------------------------------

// const sectionSelect = document.getElementsByTagName('MAIN');
//
// sectionSelect.addEventListener('scroll', function(e){
//   let sectionName = e.target.className;
//   console.log(sectionName);
// })

const sectionSelect = document.getElementById('mainSection')
// console.log(sectionSelect);
sectionSelect.addEventListener('scroll',function(e){
   console.log(e.target.classname);
  });

const roadBikeSelect = document.querySelector('.road-bike');
const roadBikeLoc = document.getElementById('road-bike')

roadBikeLoc.addEventListener("mouseover", function(event) {
  setTimeout (function(){
  roadBikeSelect.style.background = "rgb(208, 219, 159)";
},1000);
});
