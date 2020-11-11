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
  let position = 0;
  const itemToShow = 4;
  const itemToSCroll = 2;
  const container = $(".slider-container");
  const track = $(".slider-track");
  const item = $(".slider-item");
  const itemsCount = item.length;
  const btnPrev = $(".btn-prev");
  const btnNext = $(".btn-next");

  const itemWidth = container.width() / itemToShow;
  const movePosition = itemWidth * itemToSCroll;

  item.each(function (index, item) {
    $(item).css({
      minWidth: itemWidth - 8,
      marginRight: 8,
      height: itemWidth,
    });
  });

  btnPrev.click(function (e) {
    position += movePosition;
    setPosition();
    checkBtns();
    return false;
  });

  btnNext.click(function (e) {
    position -= movePosition;
    setPosition();
    checkBtns();
    return false;
  });
  const setPosition = () => {
    track.css({
      transform: `translateX(${position}px)`,
    });
  };

  const checkBtns = () => {
    // btnPrev.prop("disabled", position === 0);
    // btnNext.prop(
    //   "disabled",
    //   position <= -(itemsCount - itemToShow) * itemWidth
    // );
    if (position == 0)
      btnPrev.css({
        display: "none",
      });
    else
      btnPrev.css({
        display: "inline-block",
      });
    if (position <= -(itemsCount - itemToShow) * itemWidth)
      btnNext.css({
        display: "none",
      });
    else
      btnNext.css({
        display: "inline-block",
      });
  };

  checkBtns();
});
