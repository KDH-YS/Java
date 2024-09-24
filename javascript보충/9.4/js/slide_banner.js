$(function(){
  var visual= $('#brandVisual>ul>li');
  var button = $('#buttonList>li');
  var current = 0;

  button.click(function(){
    
    var i = $(this).index();
    // alert(i);
    button.removeClass('on');
    button.eq(i).addClass('on');
    move(i);
    $(this).addClass('on');
    return false;
  });  
  function move(i){
    if(current==i) return;
    var cu = visual.eq(current);
    var ne = visual.eq(i);
    cu.css('left','0').stop().animate({'left':'-100%'},500);
    ne.css('left','100%').stop().animate({'left':'0'},500);
    current=i;
  
  }
  function timer(){

    id = setInterval(function(){
      var n = current +1;
      if(n==3) n=0;
      move(n);
      button.eq(n).trigger('click');
    },2000);  

  }

  timer();
});