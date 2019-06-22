$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300 && screen.width >= 900) {
	    $(".navbar").css("background" , "rgba(255,255,255,0.9)");
		$(".menu__list--link").css("color" , "black");
		$(".navbar").css("height" , "74px");
		$(".navbar").css("border-bottom" , "none");
		$(".navbar").css("box-shadow","0px 0px 20px -15px rgba(0,0,0,0.75)");
		$(".logo--img").css("width", "110px");
		$(".backtoup__button").css("visibility", "visible");
		$(".logo--img").css("background-image", "url(images/logo_black.png)");
	  } else if (scroll >= 0 && screen.width < 900 ) {
		$(".navbar").css("background" , "rgba(255,255,255,0.9)");
		$(".menu__list--link").css("color" , "black");
		$(".navbar").css("height" , "74px");
		$(".navbar").css("border-bottom" , "none");
		$(".navbar").css("box-shadow","0px 0px 20px -15px rgba(0,0,0,0.75)");
		$(".logo--img").css("width", "110px");
		$(".backtoup__button").css("visibility", "visible");
		$(".logo--img").css("background-image", "url(images/logo_black.png)");
	  }
	  else {
		$(".navbar").css("background" , "transparent");  	
		$(".menu__list--link").css("color" , "#fff");  	
		$(".navbar").css("height" , "86px");
		$(".navbar").css("border-bottom" , " solid 1px #797979");
		$(".navbar").css("box-shadow","none");
		$(".logo--img").css("width", "127px");
		$(".backtoup__button").css("visibility", "hidden");
		$(".logo--img").css("background-image", "url(images/logo_white.png)");
	}
  })
})