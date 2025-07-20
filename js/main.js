
$(function () {



  gsap.registerPlugin(ScrollTrigger);

  const texts = gsap.utils.toArray(".text");

  if (!window.matchMedia("(max-width: 767px)").matches) {
    // 데스크탑 이상에서만 실행
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#introduceWrap06",
        start: "top top",
        end: `+=${texts.length * 800}`, // 텍스트 개수에 따라 스크롤 길이 조절
        scrub: true,
        pin: true,
      }
    });

    texts.forEach((text) => {
      tl.to(text, {
        opacity: 1,
        y: 0,
        duration: 0.5,
      });
      tl.to(text, {
        opacity: 0,
        y: -200,
        duration: 0.5,
      }, "+=1.5"); // 유지 시간 조절
    });
  } else {
    // 모바일일 때 텍스트는 기본 상태로 노출 (원하는 경우 추가 스타일 조절 가능)
    texts.forEach(text => {
      gsap.set(text, { opacity: 1, y: 0 });
    });
  }










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
