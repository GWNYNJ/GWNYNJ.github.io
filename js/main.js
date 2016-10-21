// $(document).ready(function() {
//   var nav = $(".nav").offset();
//   console.log(nav.top);

//   $(window).bind("scroll", function() {
//     if ($(window).scrollTop() > nav.top) {
//       $(".nav").addClass("fixed");
//     }
//     else {
//       $(".nav").removeClass("fixed");
//     }
//   });
// });

$(document).ready(function($){
    var nav = $(".nav");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 440) {
            nav.addClass("fixedNav");
        } else {
            nav.removeClass("fixedNav");
        }
    });
});