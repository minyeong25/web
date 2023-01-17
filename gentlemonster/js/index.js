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

  //메뉴 변경
  $(function () {
    $(function () {
      function resizefn() {
        let wd = $(window).width();
        if (wd < 1039) {
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
        $("nav ul").toggle();
      });
    });
  });
});
