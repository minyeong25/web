$(function () {
  let nav = $("#nav").offset().top;

  $(window).scroll(function () {
    let window = $(this).scrollTop();
    console.log(window);
    if (nav <= window) {
      $("#nav").addClass("fixed");
    } else {
      $("#nav").removeClass("fixed");
    }
  });
});
