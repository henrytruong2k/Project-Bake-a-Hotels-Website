$('.counter').countUp();



const toTop = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
  if(window.pageYOffset > 100) {
    toTop.classList.add("active-to-top");
  } else {
    toTop.classList.remove("active-to-top");
  }
})

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay: 1000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
