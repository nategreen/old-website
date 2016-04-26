$(document).ready(function(){
  $('#menu-button').click(function(){
    $('header').toggleClass('open');
  });
  $('header.open li a').click(function(){
    $('header').toggleClass('open');
  });
});
