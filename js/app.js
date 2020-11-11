//--------------------
// navbar and sections
//--------------------

// I have written this section but I think there might
// a simpler way with less code to get to the relevant
// sections

const contactSelect = document.querySelector('.contact');
const contactLoc = document.getElementById('contact')

contactSelect.addEventListener('click', function(){
  contactLoc.scrollIntoView({
    behaviour: "smooth"
  });
});

const roadBikeSelect = document.querySelector('.road-bike');
const roadBikeLoc = document.getElementById('road-bike')

roadBikeSelect.addEventListener('click', function(){
  roadBikeLoc.scrollIntoView({
    behaviour: "smooth"
  });
});

const touringBikeSelect = document.querySelector('.touring-bike');
const touringBikeLoc = document.getElementById('touring-bike')

touringBikeSelect.addEventListener('click', function(){
  touringBikeLoc.scrollIntoView({
    behaviour: "smooth"
  });
});

const hybridBikeSelect = document.querySelector('.hybrid-bike');
const hybridBikeLoc = document.getElementById('hybrid-bike')

hybridBikeSelect.addEventListener('click', function(){
  hybridBikeLoc.scrollIntoView({
    behaviour: "smooth"
  });
});

const dirtBikeSelect = document.querySelector('.dirt-bike');
const dirtBikeLoc = document.getElementById('dirt-bike')

dirtBikeSelect.addEventListener('click', function(){
  dirtBikeLoc.scrollIntoView({
    behaviour: 'smooth'
  })
})

const dutchBikeSelect = document.querySelector('.dutch-bike');
const dutchBikeLoc = document.getElementById('dutch-bike')

dutchBikeSelect.addEventListener('click', function(){
  dutchBikeLoc.scrollIntoView({
    behaviour: 'smooth'
  })
})


//--------------------
// back to to button
//--------------------

// below code was taken and adaoted frin w3school
//https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    setTimeout (function(){
      mybutton.style.display = "none";
    }, 5000);
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function timedbutton() {
  const x = document.getElementById("myBtn");
  setTimeout(function(){x.style.display = "none"}, 2000);
}
