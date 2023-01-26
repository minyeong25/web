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
  let ht = $("#contents2").offset().top;
  /*$(window).scroll(function () {
    let wd = $(window).scrollTop();
    console.log("wd : " + wd);
    if (wd >= 80) {
      $("header").addClass("fixed");
      if (wd >= 1680 && wd <= 1800) {
        $("#contents2").addClass("on");
      }
    } else {
      $("header").addClass("fixed");
      //$("#contents2").removeClass("on");
    }
  });*/

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

  $(window).on("mousewheel scroll", function () {
    let wd = $(this).scrollTop();
    console.log(wd);

    let len = $(".box").length;
    if (wd >= 80) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });
  // contents2 style 가로스크롤 이벤트

  // $(window).on("mousewheel scroll", function () {
  //   let wd = $(this).scrollTop();
  //   console.log(wd);

  //   let len = $(".box").length;
  //   if (wd >= 80) {
  //     $("header").addClass("fixed");
  //   } else {
  //     $("header").removeClass("fixed");
  //   }
  //   let elm = $(".box");

  //   $(elm).each(function (index) {
  //     $(this).on("mousewheel", function (e) {
  //       let delta = 0;
  //       if (event.wheelDelta) {
  //         delta = event.wheelDelta / 120;
  //       }
  //       let moveleft = $(window).scrollLeft();
  //       let elmSelecter = $(elm).eq(index);

  //       if (delta < 0) {
  //         /*if (wd >= 1700 && wd <= 2500) */
  //         if (wd >= 1000 && wd <= 1600) {
  //           $("#contents2").addClass("on");
  //         } //else {
  //         //   $("#contents2").removeClass("on");
  //         // }
  //         if ($(elmSelecter).next() != undefined) {
  //           try {
  //             moveleft = $(elmSelecter).next().offset().left;
  //           } catch (e) {
  //             $("#contents2").removeClass("on");
  //             moveleft = 0;
  //           }
  //         }
  //         // 마우스휠을 아래에서 위로
  //       } else {
  //         if (wd <= 1700 && wd >= 900) {
  //           $("#contents2").addClass("on");
  //         } // else {
  //         //   $("#contents2").removeClass("on");
  //         // }
  //         if ($(elmSelecter).prev() != undefined) {
  //           try {
  //             moveleft = $(elmSelecter).prev().offset().left;
  //           } catch (e) {
  //             $("#contents2").removeClass("on");
  //           }
  //         }
  //       }
  //       // 화면 이동 0.8초(800)
  //       $("html,body").stop().animate({ scrollLeft: moveleft }, 800);
  //     });
  //   });
  // });
});
