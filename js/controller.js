/* Controller.js maneja todos los procesos de aspectos generales */
$(document).ready(function() {

	/*-----decidir que pagina cargar-----*/
	// window.onload = function() {

	// 	var ln = x=window.navigator.language||navigator.browserLanguage;

	// 	if(ln == 'en'){
	// 		window.location.href = 'en/index.html';//si esta en inglés va a ingles
	// 	}else if(ln == 'es'){
	// 		window.location.href = 'es/index.html'; // si es es va a español
	// 	}else{
	// 		window.location.href = 'es/index.html'; // si no es ninguna de los dos va a español
	// 	}
	// }

	/*-----Top-----*/
	var top = document.getElementById('top');

	top.addEventListener('click', function(){ // for up
		var scrollDuration = 500,
    	scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        	if ( window.scrollY != 0 ) {
            	window.scrollBy( 0, scrollStep );
        	}
        	else clearInterval(scrollInterval); 
    	},15);
	});

	window.addEventListener('scroll', function(e){ //hide responsive
		if($(window).width()>768){
			if(getScrollPos() != 0){
				$('#top').css({'visibility': 'visible', 'opacity': '0.5'});
			}else{
				$('#top').css({'visibility': 'hidden', 'opacity': '0'});
			}
		}else{
			if(getScrollPos() != 0){
				$('#top').hide();
			}else{
				$('#top').hide();
			}
		}
	});

	function getScrollPos(){ // posicion del scroll
		var top = this.scrollY,
	        left = this.scrollX;
	  	return top;
	}

	/*For hover Demostraciones*/
	$(".over").hide();
	$(".title-dem").hide();
	$(".dem").hover(function(){
		$(this).find(".over").fadeIn(this);
		$(this).find(".title-dem").fadeIn(this);
    }
        ,function(){
            $(this).find(".over").fadeOut();
            $(this).find(".title-dem").fadeOut();
        }
    );

    var tiempo_fade = 1500;  
  
  	$(".animation").hide();
        $(".a").hover(function(){
        $(".animation").fadeIn(tiempo_fade);   
    });

    /*Animacion for scroll*/
    $('a.scroll').click(function(e){
		e.preventDefault();
		$('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
	});

    /*For hover text portafolio*/

    p = '<div class="section-titulo col-xs-12 col-sm-12 col-md-12 col-lg-12">Youtube Live</div>';
    g = '<div class="section-parraf col-xs-12 col-sm-12 col-md-12 col-lg-12">Transmisiones en vivo y grabaciones de alta calidad para tu concierto, evento, iglesia y fiesta</div>'
    tes= '<div id="i3" class="section-conten col-xs-5 col-sm-5 col-md-5 col-lg-5">'+p+g+'</div>'

    //-----------------------
    if($(window).width()<=340){
    	//rss1
				$("#rss1").removeClass("col-xs-offset-1");
				$("#rss1").addClass("col-xs-offset-2");
				$("#rss1").removeClass("col-xs-4");
				$("#rss1").addClass("col-xs-6");
			//end rss1
			//rss2
				$("#rss2").addClass("col-xs-offset-2");
				$("#rss2").removeClass("col-xs-4");
				$("#rss2").addClass("col-xs-6");
			//end rss2
			//rss3
				$("#rss3").addClass("col-xs-offset-4");
    }else{
			//rss1
				$("#rss1").removeClass("col-xs-offset-1");
				$("#rss1").addClass("col-xs-offset-3");
				$("#rss1").removeClass("col-xs-4");
				$("#rss1").addClass("col-xs-6");
			//end rss1
			//rss2
				$("#rss2").addClass("col-xs-offset-3");
				$("#rss2").removeClass("col-xs-4");
				$("#rss2").addClass("col-xs-6");
			//end rss2
			//rss3
				$("#rss3").removeClass("col-xs-offset-4");
    }
		if($(window).width()<610){
			//rss1
				$("#rss1").removeClass("col-xs-offset-1");
				$("#rss1").addClass("col-xs-offset-3");
				$("#rss1").removeClass("col-xs-4");
				$("#rss1").addClass("col-xs-6");
			//end rss1
			//rss2
				$("#rss2").addClass("col-xs-offset-3");
				$("#rss2").removeClass("col-xs-4");
				$("#rss2").addClass("col-xs-6");
			//end rss2
			//rss3
				$("#rss3").addClass("col-xs-offset-5");
			//end rss3
			$("#section2").html('<div id="i4" class="section-image col-xs-7 col-sm-7 col-md-7 col-lg-7"></div>'+tes)
			//setion 1
			$("#i1").removeClass("col-xs-7");
			$("#i2").removeClass("col-xs-5");
			$("#i5").removeClass("col-xs-7");
			$("#i6").removeClass("col-xs-5");
			$("#i1").addClass("col-xs-12");
			$("#i2").addClass("col-xs-12");
			$("#i5").addClass("col-xs-12");
			$("#i6").addClass("col-xs-12");
			$('#i1').css({'padding-top': '60%'});
			$('#i5').css({'padding-top': '50%'});
			//section 2
			$("#i4").removeClass("col-xs-7");
			$("#i3").removeClass("col-xs-5");
			$("#i4").addClass("col-xs-12");
			$("#i3").addClass("col-xs-12");
			$('#i4').css({'background-image': 'url("img/portafolio/youtubeLive.png")'});
			$('#i4').css({'padding-top': '60%'});
			$(".section3-imag").removeClass("col-xs-3");
			$(".section3-imag").addClass("col-xs-6");
			$('#s32').css({'background-image': 'url("img/portafolio/adsense.jpg")'});
			$('#s33').css({'background-image': 'url("img/portafolio/adwords.png")'});
			$('#s34').css({'background-image': 'url("img/portafolio/analytics.png")'});
			$('.section3-imag').css({'padding-top': '25%'});
			$(".rss-container").addClass("col-xs-offset-2");
			$('.rss-container').css({'margin-left': '3%'});
		}else{
			//rss1
				$("#rss1").removeClass("col-xs-offset-3");
				$("#rss1").addClass("col-xs-offset-1");
				$("#rss1").removeClass("col-xs-6");
				$("#rss1").addClass("col-xs-4");
			//end rss1
			//rss2
				$("#rss2").removeClass("col-xs-offset-3");
				$("#rss2").removeClass("col-xs-6");
				$("#rss2").addClass("col-xs-4");
			//end rss2
			//rss3
				$("#rss3").removeClass("col-xs-offset-5");
			//end rss3
			$("#section2").html(tes+'<div id="i4" class="section-image col-xs-7 col-sm-7 col-md-7 col-lg-7"></div>')
			//section 1
			$("#i1").removeClass("col-xs-12");
			$("#i2").removeClass("col-xs-12");
			$("#i5").removeClass("col-xs-12");
			$("#i6").removeClass("col-xs-12");
			$("#i1").addClass("col-xs-7");
			$("#i2").addClass("col-xs-5");
			$("#i5").addClass("col-xs-7");
			$("#i6").addClass("col-xs-5");
			$('#i1').css({'padding-top': '38%'});
			$('#i5').css({'padding-top': '30%'});
			//section 2
			$("#i4").removeClass("col-xs-12");
			$("#i3").removeClass("col-xs-12");
			$("#i4").addClass("col-xs-7");
			$("#i3").addClass("col-xs-5");
			$('#i4').css({'background-image': 'url("img/portafolio/youtubeLive.png")'});
			$('#i4').css({'padding-top': '38%'});
			$(".section3-imag").removeClass("col-xs-6");
			$(".section3-imag").addClass("col-xs-3");
			$('#s32').css({'background-image': 'url("img/portafolio/analytics.png")'});
			$('#s33').css({'background-image': 'url("img/portafolio/adwords.png")'});
			$('#s34').css({'background-image': 'url("img/portafolio/adsense.jpg")'});
			$('.section3-imag').css({'padding-top': '12%'});
			$(".rss-container").removeClass("col-xs-offset-2");
			$('.rss-container').css({'margin-left': '0%'});
		}
});
