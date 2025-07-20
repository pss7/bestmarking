
$(function () {

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  "(min-width: 1200px)": () => {
    const boxCount = 4;
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#introduceWrap07",
        start: "top top",
        end: `+=${boxCount * 100}%`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });

    timeline.to(".scrollBox01", { yPercent: -100, opacity: 0 }, 0);
    timeline.fromTo(".scrollBox02", { xPercent: 100, opacity: 0 }, { xPercent: 0, opacity: 1 }, 0.5);

    timeline.to(".scrollBox02", { yPercent: -100, opacity: 0 }, 1);
    timeline.fromTo(".scrollBox03", { xPercent: 100, opacity: 0 }, { xPercent: 0, opacity: 1 }, 1.5);

    timeline.to(".scrollBox03", { yPercent: -100, opacity: 0 }, 2);
    timeline.fromTo(".scrollBox04", { xPercent: 100, opacity: 0 }, { xPercent: 0, opacity: 1 }, 2.5);
  },
  "(max-width: 767px)": () => {
    // 모바일에서는 ScrollTrigger 비활성화 및 초기화
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // 애니메이션으로 바뀐 요소들을 원래 상태로 돌리기 (필요하면)
    gsap.set([".scrollBox01", ".scrollBox02", ".scrollBox03", ".scrollBox04"], {
      clearProps: "all",
      opacity: 1,
      xPercent: 0,
      yPercent: 0,
    });
  }
});





  
  $(window).scroll(function () {
    let scrollPos = $(window).scrollTop();

    $('.scrollElement').each(function () {
      let elementOffset = $(this).offset().top;

      if (scrollPos + $(window).height() > elementOffset) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  });

  //슬라이드
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
