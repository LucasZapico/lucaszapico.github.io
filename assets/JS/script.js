var last_known_scroll_position = 0;
var ticking = false;

let NavSticky = document.querySelector('.nav-sticky');
let NavStatic = document.querySelector('.nav-static');

var line = NavStatic.offsetTop;

function stickyOrNot(scroll_pos) {
  // do something with the scroll position
  if ( last_known_scroll_position >= line){
    (NavSticky.className = 'nav-main nav-sticky') &&
    (NavStatic.className = 'nav-main nav-static hide-nav');
  } else {
    (NavStatic.className = 'nav-main nav-static') &&
    (NavSticky.className = 'nav-main nav-sticky hide-nav');
  }
}

window.addEventListener('scroll', function(e) {

  last_known_scroll_position = window.scrollY;
  // console.log(last_known_scroll_position);
// 	check

  if (!ticking) {
    window.requestAnimationFrame(function() {
      stickyOrNot(last_known_scroll_position);
      ticking = false;
    });
    ticking = true;
  }

});
