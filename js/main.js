
$(function () {

  // $(window).load(function () {
  //   $('#visualWrap').addClass('active');
  // });

  // $('.mainBox .leftBox .slick').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //   var i = (currentSlide ? currentSlide : 0) + 1;
  //   $('.mainBox .leftBox .count').html('<em>' + i + '</em> / ' + slick.slideCount);

  //   var $text = $('.mainBox .leftBox .slideText');
  //   $text.removeClass('active').eq(currentSlide || 0).addClass('active');
  // });

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

  // $('.mainBox .leftBox .control button').on('click', function (e) {
  //   e.preventDefault();
  //   if ($(this).hasClass('pause')) {
  //     $(this).hide();
  //     $('.mainBox .leftBox .control .play').show();
  //     $('.mainBox .leftBox .slick').slick('slickPause');
  //   } else if ($(this).hasClass('play')) {
  //     $(this).hide();
  //     $('.mainBox .leftBox .control .pause').show();
  //     $('.mainBox .leftBox .slick').slick('slickPlay');
  //   }
  // });


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
