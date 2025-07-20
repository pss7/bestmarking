
$(function () {

  $("#introduceWrap02 .slick").slick({
    autoplay: true,
    arrows: false,
    variableWidth: true,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 6000,
    centerMode: true,
    speed: 1500,
  });

  $("#introduceWrap04 .slick").slick({
    autoplay: true,
    arrows: false,
    variableWidth: true,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 6000,
    centerMode: true,
    speed: 1500,
  });

  $("#introduceWrap05 .slick").slick({
    autoplay: true,
    arrows: false,
    variableWidth: true,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 6000,
    centerMode: true,
    speed: 1500,
  });

  //탭메뉴01
  $('#introduceWrap05 .tabList li a').click(function () {
    if ($(this).hasClass('active')) {
      $('#introduceWrap05 .tabList li a').removeClass('active')
    } else {
      $('#introduceWrap05 .tabList li a').removeClass('active')
      $(this).addClass('active');
    }
    return false;
  });

  //탭메뉴02
  $('#introduceWrap01 .tabContent').hide();
  $('#introduceWrap01 .tabContent').first().show();

  $('#introduceWrap01 .tabMenu li').click(function () {

    $('#introduceWrap01 .tabMenu li').children().removeClass('active');
    $(this).children().addClass('active');

    let idx = $(this).index();

    $('#introduceWrap01 .tabContent').hide();
    $('#introduceWrap01 .tabContent').eq(idx).show();

  });

});
