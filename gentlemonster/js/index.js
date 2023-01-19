$(function () {
  //top의 광고 배너
  function nextani() {
    $(".slide_wrapper > .ul_wrapper ul:first-child").animate(
      { marginLeft: "-700px" },
      1000,
      function () {
        $(".slide_wrapper > .ul_wrapper ul:first-child li")
          .eq(0)
          .appendTo(".slide_wrapper > .ul_wrapper ul:first-child");
        $(".slide_wrapper > .ul_wrapper ul:first-child").css({
          marginLeft: "0",
        });
      }
    );
  }

  function prevani() {
    $(".ul_wrapper ul:first-child li")
      .eq(2)
      .prependTo(".ul_wrapper ul:first-child");
    $(".ul_wrapper ul:first-child").css({
      marginLeft: "-700px",
    });
    $(".ul_wrapper ul:first-child").animate({ marginLeft: "0" }, 1000);
  }
  let inter = setInterval(nextani, 4000);
  $(".ul_wrapper").hover(
    function () {
      clearInterval(inter);
    },
    function () {
      inter = setInterval(nextani, 4000);
    }
  );
  $(".prev").click(function () {
    prevani();
  });
  $(".next").click(function () {
    nextani();
  });

  // 메뉴 고정
  let fixmenu = $("header").offset().top;
  $(window).scroll(function () {
    let wd = $(this).scrollTop();
    if (fixmenu <= wd) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });
  //메뉴 변경
  /*$(function () {
    $(function () {
      function resizefn() {
        let wd = $(window).width();
        if (wd < 1020) {
          $("nav ul, .icon li:nth-child(3)").hide();
        } else {
          $("nav ul, .icon li:nth-child(3)").show();
        }
      }
      $(window).resize(function () {
        resizefn();
      });
      // $(".btn").addClass("on");
      $(".menubtn").click(function () {
        $(this).toggleClass("on");
        $(".sidemenu").css({ right: "0px" });
        $(".sidemenu").toggle();
      });
    });
  });*/

  //#contents > sunglass banner
  $(".autoplay").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    dots: false,
    prevArrow:
      '<span class="leftarrow"><i class="fa-solid fa-chevron-left"></i></span>',
    nextArrow:
      '<span class="rightarrow"><i class="fa-solid fa-chevron-right"></i></span>',
    draggable: true,
  });

  // contents2 style 가로스크롤 이벤트
});
