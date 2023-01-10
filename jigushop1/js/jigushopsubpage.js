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
  //header menu click event
  $("header .gnb .menu").click(function () {
    $(this).children("a").addClass("on");
    $("header .gnb .menu").not($(this)).children("a").removeClass("on");
  });

  // subpage
  $(".product_menu ul li").hover(
    function () {
      $(this).children("a").css({ background: "#ffda00", color: "#00913a" });
    },
    function () {
      $(this).children("a").css({ background: "", color: "" });
    }
  );
  $(".product_menu ul li").click(function () {
    $(this).children("a").addClass("on");
    $(".product_menu ul li").not($(this)).children("a").removeClass("on");
  });
});
