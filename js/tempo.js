
$(function() {
    $('marquee').mouseover(function() {
        $(this).attr('scrollamount',0);
    }).mouseout(function() {
         $(this).attr('scrollamount',4);
    });

});	 	       


$( "#btnFooter" ).click(function() {
  
    $("#footerContent").toggleClass("hidden");

});


$('#myModal').on('hidden.bs.modal', function () {
   var src = $('#videoNews').attr('src');
    $('#videoNews').attr('src', ' ');
    $('#videoNews').attr('src', src);
 
})

$(document).ready(function(){

	var clickEvent = false;
	$('#myCarousel').carousel({
		interval:   4000	
	}).on('click', '.list-group li', function() {
   clickEvent = true;
   $('.list-group li').removeClass('active');
   $(this).addClass('active');		
 }).on('slid.bs.carousel', function(e) {
  if(!clickEvent) {
   var count = $('.list-group').children().length -1;
   var current = $('.list-group li.active');
   current.removeClass('active').next().addClass('active');
   var id = parseInt(current.data('slide-to'));
   if(count == id) {
    $('.list-group li').first().addClass('active');	
  }
}
clickEvent = false;
});
})



(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/pt_PT/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function onYtEvent(payload) {
  if (payload.eventType == 'subscribe') {
      // Add code to handle subscribe event.
    } else if (payload.eventType == 'unsubscribe') {
      // Add code to handle unsubscribe event.
    }
    if (window.console) { // for debugging only
      window.console.log('YT event: ', payload);
    }
  }


 function showInfoProgram(idVideo,idProgram) 
    {
      window.location.href = "program/"+idProgram+"/"+idVideo+"/true";                              
    }  

function showInfoNews(id,cat) 
{
window.location.href = "news/"+cat+"/"+id; 
                   
} 
