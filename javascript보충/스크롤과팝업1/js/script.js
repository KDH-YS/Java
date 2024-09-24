$(function() {
  // 브라우저 크기 조정 시 실행되는 함수
  function adjustSectionHeight() {
      var h = $(window).height(); // 현재 브라우저 높이를 변수 h에 저장
      $('section>div').height(h); // 각 섹션의 높이를 브라우저 높이로 설정
  }

  // 페이지 시작 시 높이 조정
  adjustSectionHeight();
  $(window).resize(adjustSectionHeight); // 브라우저 크기 변경 시 높이 조정

  // 스크롤 이벤트 처리
  $(window).scroll(function() {
      var sct = $(window).scrollTop(); // 현재 스크롤 위치
      $('#sTop').text(sct); // 스크롤 위치를 화면에 표시

      // 네비게이션 바 고정/해제
      if (sct >= 100) {
          $('nav').addClass('fixed');
      } else {
          $('nav').removeClass('fixed');
      }

      // 섹션 인덱스 계산 및 네비게이션 클래스 변경
      var sections = $('section>div');
      var navItems = $('nav ul li');
      var currentIndex = -1;

      sections.each(function(index) {
          var sectionOffset = $(this).offset().top;
          if (sct >= sectionOffset) {
              currentIndex = index;
          }
      });

      navItems.removeClass('on'); // 모든 네비게이션 항목에서 'on' 클래스 제거
      if (currentIndex !== -1) {
          navItems.eq(currentIndex).addClass('on'); // 현재 섹션에 해당하는 네비게이션 항목에 'on' 클래스 추가
      }
  });

  // 네비게이션 클릭 시 부드럽게 스크롤
  $('nav ul li').click(function() {
      var i = $(this).index(); // 클릭한 항목의 인덱스
      var offset_nav = $('section>div').eq(i).offset().top; // 해당 섹션의 상단 위치
      $('html, body').stop().animate({ scrollTop: offset_nav }, 1000); // 부드럽게 스크롤
  });

  var dTop = $('#floatdiv').offset().top;

  var scrollTimeout;

  $("section>div").mousewheel(function(event, d) {
      if (scrollTimeout) clearTimeout(scrollTimeout); // 이전 타이머 클리어
  
      scrollTimeout = setTimeout(function() {
          var targetOffset;
          if (d > 0) {
              targetOffset = $(this).prev().offset().top;
          } else if (d < 0) {
              targetOffset = $(this).next().offset().top;
          }
  
          $('html, body').stop().animate({ scrollTop: targetOffset }, 1000);
      }.bind(this), 150); // 150ms의 지연을 두어 빠른 휠 스크롤에 대응
  });
  
  $('#popup').draggable()

  if($.cookie('pop')!='no'){
    $('#popup').show();
  }

  $('#popup area:eq(0)').click(function(){
    $('#popup').fadeOut();
  })
  $('#popup area:eq(1)').click(function(){
    $.cookie('pop','no',{expires:1})
    $('#popup').fadeOut();
  })

    if($.cookie('popup')=='none'){
        $('#notice_wrap').hide();
    }

    var chk = $('#expiresChk');

   


});
