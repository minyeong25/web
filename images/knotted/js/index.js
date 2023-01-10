$(function () {
  $(".menu").hide();
  $(".head a:first, .btn a").click(function (e) {
    e.preventDefault();
    $(".menu").toggle();
  });
  $("header input").hide();
  $(".fa-magnifying-glass").click(function (e) {
    e.preventDefault();
    $("header input").toggle();
  });

  // menu 480 이하일때
  function resizefn() {
    let wd = $(window).width();
    console.log(wd);
    if (wd < 481) {
      $(".menu .gnb .sub").hide();
    } else {
      $(".menu .gnb .sub").show();
    }
  }
  $(window).resize(function () {
    resizefn();
  });

  // 아래 서식이 480이상일때도 적용이 됨
  $(".menu .gnb > li > a").click(function (e) {
    e.preventDefault();
    let num = $(this).parent().index();
    $(".menu .gnb .sub").eq(num).slideToggle();
  });

  // menu 끝

  //scroll event
  let ht = $(window).height();
  $("section").height(ht);
  $(window).resize(function () {
    let ht = $(window).height();
    $("section").height(ht);
  });

  $(window).scroll(function () {});
  $("section").on("mousewheel", function (_event, delta) {
    console.log(delta);
    if (delta > 0) {
      if ($(this).next() != undefined) {
        try {
          let prev = $(this).prev().offset().top;
          console.log("prev :" + prev);
          $("html,body")
            .stop()
            .animate({ scrollTop: prev }, 1400, "easeOutBounce");
        } catch (e) {}
      }
    } else if (delta < 0) {
      if ($(this).next() != undefined) {
        try {
          let next = $(this).next().offset().top;
          $("html,body")
            .stop()
            .animate({ scrollTop: next }, 1400, "easeOutBounce");
        } catch (e) {}
      }
    }
  });
});
