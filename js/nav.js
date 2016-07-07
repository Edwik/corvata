/*Code nav for responsive*/

$(document).ready(function() {	
	window.addEventListener('scroll', function(e){
		if($(window).width()>768){
			if(getScrollPos() != 0){
				document.getElementById('nav').style.paddingTop = '10px';
				document.getElementById('nav').style.boxShadow = '0 4px 5px rgba(0, 0, 0, 0.2)';
				$('#nav').css('background-color', 'white');
			}else{
				document.getElementById('nav').style.paddingTop = '20px';
				document.getElementById('nav').style.boxShadow = 'none';
				$('#nav').css('background-color', 'transparent');
			}
		}else{
			if(getScrollPos() != 0){
				document.getElementById('nav').style.paddingTop = '20px';
				document.getElementById('nav').style.marginTop = '-80px';
				//document.getElementById('nav').style.boxShadow = '0 4px 5px rgba(0, 0, 0, 0.2)';
				 $('#nav').css('background-color', 'white');
			}else{
				document.getElementById('nav').style.paddingTop = '20px';
				document.getElementById('nav').style.marginTop = '0px';
				document.getElementById('nav').style.boxShadow = 'none';
				$('#nav').css('background-color', 'white');
			}
		}
	});
	// Implementa el method declarador en controller
	function getScrollPos(){ // posicion del scroll
		var top = this.scrollY,
	        left = this.scrollX;
	  	return top;
	}
});