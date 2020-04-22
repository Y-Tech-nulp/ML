$('#fucking_buttons a').click(function(e) {
  e.preventDefault();
  $("#fucking_buttons li").attr("id","");
  $(this).parent().attr("id","current"); 
  $('#' + $(this).attr('title')).fadeIn(); 
  });