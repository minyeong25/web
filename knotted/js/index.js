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

  //menu 480 이하일때
  function resizefn() {
    let wd = $(window).width();
    console.log(wd);
    if (wd < 510) {
      $(".menu .gnb > li i").css({ display: "inline-block" });
      $(".menu .gnb .sub").hide();
    } else {
      $(".menu .gnb > li i").css({ display: "none" });
      $(".menu .gnb .sub").show();
    }
  }

  $(window).resize(function () {
    resizefn();
  });

  // 아래 서식이 480이상일때도 적용이 됨
  $(".gnb > li i").click(function () {
    // e.preventDefault();
    let submenu = $(this).parent().parent().children(".sub");
    $(".sub").slideUp();
    if (submenu.is(":visible")) {
      submenu.slideUp();
    } else {
      submenu.slideDown();
    }
  });
  // menu 끝
  $(".page li").eq(0).addClass("on");
  //scroll event
  let ht = $(window).height();
  $("section").height(ht);
  $(window).resize(function () {
    let ht = $(window).height();
    $("section").height(ht);
  });
  $(window).scroll(function () {
    let ht = $(window).height();
    let t = $(window).scrollTop();
    console.log(ht + t);
    // if (t >= ht * 0 && t < ht * 1) {
    //   $(".page li").removeClass("on");
    //   $(".page li").eq(0).addClass("on");
    // } else if (t >= ht * 1 && t < ht * 2) {
    //   $(".page li").removeClass("on");
    //   $(".page li").eq(1).addClass("on");
    // } else if (t >= ht * 2 && t < ht * 3) {
    //   $(".page li").removeClass("on");
    //   $(".page li").eq(2).addClass("on");
    // }
    for (let i = 0; i < 3; i++) {
      if (t >= ht * i && t < ht * (i + 1)) {
        $(".page li").removeClass("on");
        $(".page li").eq(i).addClass("on");
      }
    }
  });
  $("section").on("mousewheel", function (event, delta) {
    console.log(delta);
    // let n = $(this).index();
    // console.log("n:", n);
    // $(".page li").removeClass("on");
    // $(".page li").eq(n).addClass("on");

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
