$(function () {
  $(".sub").css("display", "none");
  $(".menu li, .sub").hover(
    function () {
      $(".sub").stop().slideDown(300);
    },
    function () {
      $(".sub").stop().slideUp(300);
    }
  );
  $(".sub > li").hover(
    function () {
      let i = $(this).index();
      console.log(i);
      $(".menu li a").removeClass("on");
      $(".menu li").eq(i).find("a").addClass("on");
    },
    function () {
      $(".menu li a").removeClass("on");
    }
  );
  function nextani() {
    $(".img_wrap").animate({ marginLeft: "-1200px" }, 500, function () {
      $(".img_wrap li").eq(0).appendTo(".img_wrap");
      $(".img_wrap").css({ marginLeft: "0" });
    });
  }
  let interval = setInterval(nextani, 2000);
});
