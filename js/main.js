// jQuery(document).ready(function( $ ) {
//     $('.counter').counterUp({
//     delay: 10,
//     time: 1000
//     });
// })
$('.counter').counterUp();
const toTop = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
  if(window.pageYOffset > 100) {
    toTop.classList.add("active-to-top");
  } 
  else {
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
//set scroll in bottom page
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  if(Math.ceil(scrolled) === scrollable) {
    alert('You\'re in the bottom page');
  }
  
  
  console.log(scrolled);
});

// const counters = document.querySelectorAll('.counter');
// const speed = 10;


// counters.forEach(counter => {
//   const updateCount = () => {
//     const target = counter.getAttribute('data-target');
//     const count = +counter.innerText;
//     //console.log('count: ' + count);
//     const inc = target / speed;
    
//     // console.log(inc);
//     if(count < target) {
//       counter.innerText = count + Math.trunc(inc);
//       setTimeout(updateCount, 100);
//     } else {
//       count.innerText = target;
//     }
//     //console.log(typeof target);
//   }
//   updateCount();
// });
