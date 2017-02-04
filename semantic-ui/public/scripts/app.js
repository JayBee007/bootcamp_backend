$("document").ready(function(){
   var rel = $('body[rel]').attr('rel');
   var menu = $("#menu a");
   menu.eq(rel).addClass("active");
   
   $("#m_btn").on("click",function(){
      $("#m_menu").sidebar('toggle'); 
   });
   
   $(".ui.small.circular.image").dimmer({on: "hover"});
   
});