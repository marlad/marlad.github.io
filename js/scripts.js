
var check = "Scripts.js is loaded!";

console.log(check);

$("a[href^='http://']").attr("target","_blank");

$("a[href^='https://']").attr("target","_blank");

// https://github.com/mattboldt/typed.js/

$(function(){
  $(".typed").typed({
    strings: ["Marla got up to in Margaret River^4000", "^2000Sam loved about Lancelin^4000", "^2000Esther did in Esperance"],
    typeSpeed: 50,
    startDelay: 3500
  });
});

var viewport_height = $(window).height();
var header_height = $('.site-header').height();
var wrapper_height = $('#shorty').height();
var footer_height = $('.site-footer').height();
var new_height = viewport_height - header_height - footer_height - 60; // 60 is wrapper padding

if (wrapper_height < viewport_height - header_height - footer_height) {
  $("#shorty").css("height", new_height);
}
else {
  console.log("Not short")
}

$('a.smooth_scroll').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 500);
  return false;
});
