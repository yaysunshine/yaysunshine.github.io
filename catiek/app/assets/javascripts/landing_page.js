$(document).ready(function() {

  // $('#shake').hover(function(){
  //     if(!$(this).hasClass('animated')){
  //         $(this).addClass('animated');
  //         $(this).stop().effect('shake', {distance:3}, 200);
  //     }
  // }, function(){
  //     $(this).removeClass('animated');
  // });


  // function periodical() {
  //   $('#shaker').effect('shake', { times:3 }, 200);
  // }
  // $(document).ready(function() {
  //   $('#shaker').hide().fadeIn(600);
  //   var shake = setInterval(periodical, 5000);

  //   /* updated: click clear */
  //   $('#shaker').click(function() {
  //     clearInterval(shake);
  //   })
  // });
  $( document ).mouseover(function(){
    $('#shaker').effect( "shake" )
  });
  console.log("here");
});
