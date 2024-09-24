document.addEventListener('DOMContentLoaded', function() {
  var visual = document.querySelectorAll('#brandVisual > ul > li');
  var button = document.querySelectorAll('#buttonList > li');
  var current = 0;
  var intervalId;

  function move(i) {
    if (current === i) return;
    
    var cu = visual[current];
    var ne = visual[i];
    
    cu.style.left = '0';
    cu.style.transition = 'left 0.5s';
    cu.style.left = '-100%';

    ne.style.left = '100%';
    ne.style.transition = 'left 0.5s';
    ne.style.left = '0';

    current = i;
  }

  button.forEach(function(btn, index) {
    btn.addEventListener('click', function() {
      button.forEach(function(btn) {
        btn.classList.remove('on');
      });
      btn.classList.add('on');
      move(index);
      return false;
    });
  });

  function timer() {
    intervalId = setInterval(function() {
      var n = current + 1;
      if (n === visual.length) n = 0;
      move(n);
      button[n].click();
    }, 2000);
  }

  timer();
});
