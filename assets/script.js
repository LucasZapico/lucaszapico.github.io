const projectCarousel = document.querySelector('.carousel');
const el = document.querySelector('.tabs');
const HOMETOC = document.querySelector('.toc-wrapper');

var homeTOC = M.Pushpin.init(HOMETOC);

//tab component intanciation
var homeTabs = M.Tabs.init(el);

// Project CAROUSEL
var carousel = M.Carousel.init(projectCarousel, {
  fullWidth: true,
  indicators: true,
  duration: 1000,
  onCycleTo: function(){
    cycleSlide();
  }
});
// home carousel slide interval
function cycleSlide(){
  setTimeout(carTimer, 8000);
  function carTimer() {
      carousel.next();
  }
}
// SCROLLSPY
document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.scrollspy');
   var scrollspy = M.ScrollSpy.init(elems);
 });


var elem = document.querySelector('.parallax');
 var parallax = M.Parallax.init(elem);

// // ABOUT PAGET COLLAPSIBLE
//  document.addEventListener('DOMContentLoaded', function(){
//    var collapsElms = document.querySelectorAll('.collapsible');
//    var instances = M.Collapsible.init(collapsElms);
//  });

// SIDENAV
// var sidenav = M.Sidenav.getInstance(elem);
{/* <ul id="slide-out" class="sidenav">
     <li><a class="sidenav-close" href="#!">Clicking this will close Sidenav</a></li>
 </ul>
 <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a> */}
