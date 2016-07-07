/*Code slider*/

$(document).ready(function() {
	
	var indicador = 0, final = false;
	updateHeight(); //for slide
		
	window.addEventListener('resize', function(){
		updateHeight();
	});
	
	var slides = $('.slide');
	
	$('#buttonSlideLeft').click(function(event){
		anima = Math.floor((Math.random() * (2)));
		moveSlider("left", slides, anima);
	});
	
	$('#buttonSlideRight').click(function(event){
		anima = Math.floor((Math.random() * (2)));
		moveSlider("right", slides, anima);
	});
	
	function moveSlider(direccion, slides, anima){
		var limite = 3;	
		indicador = (direccion == 'right') ? indicador + 1 : indicador - 1;
		indicador = (indicador < 0) ? indicador + limite : indicador;
		
		if(indicador == 3){
			final = true;
			indicador = 0;
		}
		if(!final){
			if(indicador != 2)
				$('#buttonSlideRight .imgPreview').css('background-image', 'url('+$(slides[indicador+1]).data('background')+')');		else
				$('#buttonSlideRight .imgPreview').css('background-image', 'url('+$(slides[0]).data('background')+')');
				$('#buttonSlideLeft .imgPreview').css('background-image', 'url('+$(slides[indicador - 1]).data('background')+')');
			if(direccion == 'left'){
				if(anima == 1){
					$(slides[indicador + 1]).css({
						'transition': 'all 2s cubic-bezier(0,0,0.09,0.87), opacity .5s cubic-bezier(0,0,0.09,0.87)', 
						'transform': 'scale(0.05)',
						'transform-origin': '50% 50%', 
						'opacity': '0'
					});
					$(slides[indicador]).css({
						'transition': 'all 1s cubic-bezier(0,0,0.09,0.87)',
						'transform': 'scale(1.1)', 
						'transform-origin': '50% 50%',
						'opacity': '1',
						'z-index': '3'
					});
				}else{		
					$(slides[indicador + 1]).css({
						'transition': 'all 2s cubic-bezier(0,0,0.09,0.87), opacity .5s cubic-bezier(0,0,0.09,0.87)', 
						'transform': 'translateY(-90deg)', 
						'opacity': '0'
					});
					$(slides[indicador]).css({
						'transition': 'all 1s cubic-bezier(0,0,0.09,0.87)',
						'transform': 'scale(1.1)', 
						'transform-origin': '50% 50%',
						'opacity': '1',
						'z-index': '3'
					});
				}
			}else{
				if(anima == 0){
					$(slides[indicador - 1]).css({
						'transition': 'all 2s cubic-bezier(0,0,0.09,0.87), opacity .5s cubic-bezier(0,0,0.09,0.87)', 
						'transform': 'scale(0.05)', 
						'transform-origin': '50% 50%',
						'opacity': '0'
					});
					$(slides[indicador]).css({
						'transition': 'all 1s cubic-bezier(0,0,0.09,0.87)',
						'transform': 'scale(1.1)', 
						'transform-origin': '50% 50%',
						'opacity': '1',
						'z-index': '3'
					});	
				}else{
					$(slides[indicador - 1]).css({
						'transition': 'all 2s cubic-bezier(0,0,0.09,0.87), opacity .5s cubic-bezier(0,0,0.09,0.87)', 
						'transform-origin': '0 0',
						'transform': 'rotateY(90deg)', 
						'opacity': '0'
					});
					$(slides[indicador]).css({
						'transition': 'all 1s cubic-bezier(0,0,0.09,0.87)',
						'transform': 'scale(1.1)', 
						'transform-origin': '50% 50%',
						'opacity': '1',
						'z-index': '3'
					});
				}
			}
		}else{
			$('#buttonSlideRight .imgPreview').css('background-image', 'url('+$(slides[0]).data('background')+')');
			$('#buttonSlideLeft .imgPreview').css('background-image', 'url('+$(slides[2]).data('background')+')');
			if(anima == 1){
				$(slides[limite - 1]).css({
					'transition': 'all 2s cubic-bezier(0,0,0.09,0.87), opacity .5s cubic-bezier(0,0,0.09,0.87)', 
					'transform': 'scale(0.05)', 
					'transform-origin': '50% 50%',
					'opacity': '0'
				});
				$(slides[0]).css({
					'transition': 'all 1s cubic-bezier(0,0,0.09,0.87)', 
					'transform': 'scale(1.1)', 
					'transform-origin': '50% 50%',
					'opacity': '1',
					'z-index': '3'
				});
			}else{
				$(slides[limite - 1]).css({
					'transition': 'all 2s cubic-bezier(0,0,0.09,0.87), opacity .5s cubic-bezier(0,0,0.09,0.87)', 
					'transform-origin': '0 0',
					'transform': 'rotateY(90deg)', 
					'opacity': '0'
				});
				$(slides[0]).css({
					'transition': 'all 1s cubic-bezier(0,0,0.09,0.87)',
					'transform': 'scale(1.1)', 
					'transform-origin': '50% 50%',
					'opacity': '1',
					'z-index': '3'
				});
			}
			final = false;
		}
	}

	function updateHeight(){
		if($(window).width()>768){
			$('#slider').css('height', $(window).height());
			$('.slide').css('height', $(window).height());
		}else{
			$('#slider').css('height', '300px');
			$('.slide').css('height', '300px');
		}		
	}
});