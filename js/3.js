window.onscroll = function() {
    var nav = document.querySelector('body');
    if ( window.pageYOffset > 10 ) {
        nav.classList.add("sticky-header");
    } else {
        nav.classList.remove("sticky-header");
    }
}

/*$(function(){
    $(window).scroll(function(){
      var winTop = $(window).scrollTop();
      if(winTop >= 30){
        $("body").addClass("sticky-header");
      }else{
        $("body").removeClass("sticky-header");
      }//if-else
    });//win func.
  });//ready func.

function runOnScroll() {
    if (document.body.scrollTop >= 30) {
     var h1 = document.getElementsByTagName("h1")[0];
     $("body").addClass("sticky-header");
      }
 }; 
window.addEventListener("scroll", runOnScroll);

//use window.scrollY
var scrollpos = window.scrollY;
var header = document.getElementById("body");

function add_class_on_scroll() {
    header.classList.add("sticky-header");
}

function remove_class_on_scroll() {
    header.classList.remove("sticky-header");
}

window.addEventListener('scroll', function(){ 
    //Here you forgot to update the value
    scrollpos = window.scrollY;

    if(scrollpos > 20){
        add_class_on_scroll();
    }
    else {
        remove_class_on_scroll();
    }
    console.log(scrollpos);
}); 
window.addEventListener('scroll', function(e) {
    document.getElementById('body').classList[e.pageY > 10 ? 'add' : 'remove']('sticky-header');
}); */