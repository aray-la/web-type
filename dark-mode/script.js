$(document).ready(function() {
  // Your JavaScript goes here.
  console.log('hello world');
 
  $('#darkmode').click(function(){
    console.log('button clicked');

    $('body').toggleClass('darkmode');

  });

});