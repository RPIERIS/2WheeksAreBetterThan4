//--------------------
// navbar and sections
//--------------------

const navSelect = document.getElementById('navBar');

navSelect.addEventListener('click',function(e){
  let newName = e.target.className.slice(7) // as the specific name of the bike starts from the 7th character
  let contactNewLoc = document.getElementById(newName);
  contactNewLoc.scrollIntoView();
});

//---------------------
// back to top button
//---------------------

mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (window.scrollY >= 44) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  mybutton.style.display = "block";
}

//---------------------
// heighlight navbar
//---------------------

let navigLink = document.querySelectorAll('.select');
let sectionList = document.querySelectorAll('.container_new');

window.addEventListener('scroll', function(){
    for (list of sectionList) {
      let position = list.getBoundingClientRect();

      if (position.top <= 150 && position.bottom >= 150) {
        for (const navig of navigLink) {
          if(navig.classList.contains(list.id)) {
            navig.classList.add('active-nav');
          }
        }
      } else {
        for (const navig of navigLink) {
          if (navig.classList.contains(list.id)){
            navig.classList.remove('active-nav');
          }
        }
      }
    }
});
