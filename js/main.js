$(".button-collapse").sideNav();
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
});

//   var options = [
//   {selector: '.works-txt', offset: 0, callback: function(el) {
//     el.classList.add('fadeIn');
//   } },
//   {selector: '.testi', offset: 0, callback: function(el) {
//     el.classList.add('flipInX');
//   } },
//   {selector: '.testi', offset: 0, callback: function(el) {
//     el.classList.add('flipInX');
//   } }
// ];
// Materialize.scrollFire(options);
