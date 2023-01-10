$(function () {
  $(".menu").hover(
    function () {
      $(this).children("a").css("color", "#ccc");
      $(this).find(".sub").stop().fadeIn(100);
    },
    function () {
      $(this).children("a").css("color", "");
      $(this).find(".sub").stop().fadeOut(100);
    }
  );
  $(".sub").hover(
    function () {
      $(".menu a").css("color", "");
    },
    function () {
      $(".menu a").css("color", "");
    }
  );

  /* let Offset = $(".gnb").offset();
  $(window).scroll(function () {
    console.log($(window).scrollTop());
    let ht = $(window).scrollTop();
    if (ht > 200) {
      $(".gnb").addClass("fixed");
    } else {
      $(".gnb").removeClass("fixed");
    }
  }); */

  // slide img
  $(".ban").bxSlider({
    mode: "horizontal",
    moveSlides: 1,
    slideMargin: 0,
    infiniteLoop: true,
    slideWidth: 1170,
    minSlides: 1,
    maxSlides: 1,
    speed: 300,
    auto: true,
    autoHover: true,
    controls: true,
  });

  $(".menu a").on("click", function (e) {
    e.preventDefault();
  });

  function nextani() {
    let num = 0;
    let total = $(".item_box > div").length;
    $(".page li").eq(num).find("a").addClass("on");
    $("item_box > div").eq(num).addClass("on");
  }
  function gallery(n) {
    $(".page li a").removeClass("on");
    $(".page li").eq(n).find("a").addClass("on");
    $("item_box > div").removeClass("on");
    $("item_box > div").eq(n).addClass("on");
  }
  function gallery_next() {
    if (num < total - 1) {
      num++;
    } else {
      num = 0;
    }
    gallery(num);
  }
});
