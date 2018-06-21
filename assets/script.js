const HOMECAROUSEL = document.querySelector('.carousel');
const el = document.querySelector('.tabs');
const HOMETOC = document.querySelector('.toc-wrapper');

var homeTOC = M.Pushpin.init(HOMETOC);

//tab component intanciation
var homeTabs = M.Tabs.init(el);

// HOME CAROUSEL
var carousel = M.Carousel.init(HOMECAROUSEL, {
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


var elem = document.querySelector('.parallax');
 var parallax = M.Parallax.init(elem);

// ABOUT PAGET COLLAPSIBLE
 document.addEventListener('DOMContentLoaded', function(){
   var collapsElms = document.querySelectorAll('.collapsible');
   var instances = M.Collapsible.init(collapsElms);
 });
