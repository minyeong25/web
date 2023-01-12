$(function () {
  $(".menu >ul").hide();
  $(".menu").hover(
    function () {
      // $(this).children("a").css("color", "#ffda00");
      $(this).children("ul").stop().fadeIn(100);
    },
    function () {
      // $(this).children("a").css("color", "");
      $(this).children("ul").stop().fadeOut(100);
    }
  );
  /*$(".sub2").hide();
  $(".sub_con li").hover(
    function () {
      $(".menu a").css("color", "");
      $(this).children(".sub2").stop().fadeIn(100);
    },
    function () {
      $(".menu a").css("color", "");
      $(this).children(".sub2").stop().fadeOut(100);
    }
  );*/

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

  // $(".menu a").on("click", function (e) {
  //   e.preventDefault();
  // });

  $(".autoplay").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    dots: true,
    prevArrow:
      '<span class="prev"><i class="fa-solid fa-chevron-left"></i></span>',
    nextArrow:
      '<span class="next"><i class="fa-solid fa-angle-right"></i></span>',
    draggable: true,
  });
  $("#content3 .item .item_img").hover(
    function () {
      $(this).children("img:last").css({ opacity: "1" });
    },
    function () {
      $(this).children("img:last").css({ opacity: "0" });
    }
  );
});
