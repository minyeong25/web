$(function () {
  let nav = $("#nav").offset().top;

  $(window).scroll(function () {
    let window = $(this).scrollTop();
    if (nav <= window) {
      $("#nav").addClass("fixed");
    } else {
      $("#nav").removeClass("fixed");
    }
    console.log(window);
  });
});
