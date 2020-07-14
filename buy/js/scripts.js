$(function(){
    $('.timer').countdown({
      until: '+0d +0h 15m ',
      format: 'HMS',
      compact: true,
      layout: '<div class="timebox"><span>{h10}</span><span>{h1}</span> <em>giờ</em></div>' +
              '<div class="timebox"><span>{m10}</span><span>{m1}</span> <em>phút</em></div>' +
              '<div class="timebox"><span>{s10}</span><span>{s1}</span> <em>giây</em></div>'
    });
    
});
