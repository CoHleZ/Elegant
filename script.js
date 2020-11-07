$(document).ready(function () {
  $("#hamburger").click(() => {
    $(".hamburglar").toggleClass("is-open");
    $("body").toggleClass("no-scroll");
    $(".menu-wrapper").toggleClass("menu-wrapper_active");
  });

  $(".arrow").click(() => {
    myHeight = document.documentElement.clientHeight;

    $("body, html").animate({ scrollTop: myHeight + "px" }, 800);
  });
});
