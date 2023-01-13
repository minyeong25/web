$(function () {
  //$(".nav1").hide();
  $("#gnb li:first").click(function () {
    $(".nav1").css({ left: "20%", opacity: "1" });
    $(".nav1").show();
    $(".nav2").hide();
  });
  $(".nav1 ul li").click(function () {
    $(this).children().show();
    $(this).not($(this)).children().hide();
  });
});
