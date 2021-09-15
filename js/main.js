// var scrollPosition = window.scrollY;
var menu = document.querySelector(".menu");
var menu2 = document.querySelector(".menu2");
window.addEventListener("scroll", () => {
  if ((window.pageYOffset) >= 115) {


    menu.classList.add("display_none");

    menu2.style.display = "block";
  }
  else {
    menu.classList.remove("display_none");
    menu2.style.display = "none";
  }
});

var menu3 = document.querySelector(".menu3");
var menu2_toggle = document.querySelector(".menu2 ul");
var menuSwitch = document.querySelector(".burger").addEventListener("click", () => {


});



const menuBtn = document.querySelector(".burger");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menu2_toggle.style.display = "none";
    
    menu3.style.display = "block"
    menuBtn.classList.add("open");

    menuOpen = true;
  } else {
    menu2_toggle.style.display = "block";
    menu2_toggle.classList.add("myrow");
    menu3.style.display = "none"
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});



// slider ====================================================
$(function () {
  $('.timeline-nav').slick({
    // autoplay:true,
    // autoplaySpeed:1000,
    slidesToShow: 12,
    slidesToScroll: 1,
    asNavFor: '.timeline-slider',
    centerMode: false,
    focusOnSelect: true,
    mobileFirst: true,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 8,
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      }
    ]
  });

  $('.timeline-slider').slick({
    // autoplay:true,
    // autoplaySpeed:1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.timeline-nav',
    centerMode: true,
    cssEase: 'ease',
    edgeFriction: 0.5,
    mobileFirst: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 0,
        settings: {
          centerMode: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true
        }
      }
    ]
  });

});



// timeline 
var node=document.querySelector(".node");
node.addEventListener("mouseover",()=>{
  node.classList.remove('my-visible');
});
node.addEventListener("mouseleave",()=>{
  node.classList.add('my-visible');
});