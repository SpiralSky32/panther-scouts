$(window).on("scroll", function() {
  var scroll = $(window).scrollTop();
  var header = $("#header");
  if (scroll >= 1) {
    header.addClass("minimised-heading");
    header.children().addClass("minimised-font");
  }
  else {
    header.removeClass("minimised-heading")
  }
});