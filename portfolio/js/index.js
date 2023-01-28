$(function () {
  let nav = $("#nav").offset().top;

  $(window).scroll(function () {
    let window = $(this).scrollTop();
    console.log(nav);
    if (window > 0 && window < 900) {
      $("header").addClass("fixed");
    } else if (window >= 900) {
      $(".skill_per").css({ "animation-play-state": "running" });
    } else {
      $("header").removeClass("fixed");
    }
    // else {
    //   $(".skill_per").css({ "animation-play-state": "paused" });
    // }
  });

  // $("#profile").hover(function () {
  //   $(".skill_per").css({ "animation-play-state": "running" });
  // });
});
