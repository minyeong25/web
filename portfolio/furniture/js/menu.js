$(function () {
  //$(".nav1").hide();
  $("#gnb li:first").click(function () {
    // $(".nav1").css({ left: "20%", opacity: "1" });
    $(".nav1").css({ left: "20%", opacity: "1" });
    // $(".nav1").show();
    // $(".nav2").css({ opacity: "0" });
    $(".nav2").hide();
  });
  $(".nav1 ul li").click(function () {
    // $(this).children(".nav2").show().css({ left: "30%", opacity: "1" });
    $(".nav1").css({ width: "23%" });
    $(this).children(".nav2").show();
    // $(this).children(".nav2").css({ opacity: "1" });
    $(".nav1 ul li").not($(this)).find(".nav2").hide();
    // $(".nav1 ul li").not($(this)).find(".nav2").css({ opacity: "0", transition: "all 0.2s" });
  });
  $(".nav1 i").click(function () {
    $(".nav1, .nav2").hide();
  });
});
