$(document).ready(function(){

$(".error").css("color","#133072");

$(".tekst1 img").click(function(){
	$(".po").toggle().css({"color":"#133072","fontSize":"35px"});
	
})


$('.slideshow').cycle({
		fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
	});
});

$('#logo h1').hover(function(){

        $(this).animate({fontSize: '+=5px'}, 1000);

   }, function(){

        $(this).animate({fontSize: '-=5px'}, 1000);

   });
$('#meni a').hover(function(){
$(this).css("color","#133072");
   },function(){
	$(this).css("color","#61000d");   
	   
   });

$('.footer-distributed .footer-links').hover(function(){

        $(this).animate({fontSize: '+=2px'}, 1000);

   }, function(){

        $(this).animate({fontSize: '-=2px'}, 3000);

   });

   $(window).scroll(function(){
   
		var skrolovano = $(this).scrollTop();

		if(skrolovano > 300){
			$('#scroll').fadeIn();
		} else {
			$('#scroll').fadeOut();
		}

	});
 $('#scroll').click(function(){

        
        $('html').animate({
            scrollTop: 0
        }, 3000);
    });

$('#more').hide();

 $('#author').click(function (event) {
    event.preventDefault();
    $(this).parent().find('#more').slideToggle('slow');
    $(this).text($(this).text() == 'Read less...' ? 'Read more...' : 'Read less...');
 });
	
 $('.slideshow').cycle({
		fx: 'fade' 
	});
	$("#nesto p").hover(function(){
$(this).css("color","#133072");
   },function(){
	$(this).css("color","#61000d");   
	   
   })
   

	