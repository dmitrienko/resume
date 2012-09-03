// JavaScript Document

$("h2").bind('click', function(){
  $(this).parent().find(".content__layout__include").slideToggle(200); 
  return false;
});