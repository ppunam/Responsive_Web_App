
	$(document).ready(function(){
		$('.btn5').css({opacity:0.5});
		$('.btn6').css({opacity:0.5});
		$('.btn7').css({opacity:0.5});

		$('.btn4').attr('disabled','disabled');
		$('.btn5').attr('disabled','disabled');
		$('.btn6').attr('disabled','disabled');
		$('.btn7').attr('disabled','disabled');
		
		$('select').click(function(){
			$('.btn5').css({opacity:1});
			$('.btn6').css({opacity:1});
			$('.btn7').css({opacity:1});

			$('.btn4').removeAttr('disabled');
			$('.btn5').removeAttr('disabled');
			$('.btn6').removeAttr('disabled');
			$('.btn7').removeAttr('disabled');
	    });
	});

	$(window).resize(function(){
		if($(window).width() <= 420){
			$('ul').css('margin','0');
			$('ul').css('padding','0');

			$("ul li:nth-last-child(1)").show();
			$("ul li:nth-last-child(2)").hide();
			$("ul li:nth-last-child(3)").hide();
			$("ul li:nth-last-child(4)").hide();
			$("ul li:nth-last-child(5)").hide();
		}
		if($(window).width() > 420){
			$('ul').css('margin','0');
			$('ul').css('padding','0');

			$("ul li:nth-last-child(1)").hide();
			$("ul li:nth-last-child(2)").show();
			$("ul li:nth-last-child(3)").show();
			$("ul li:nth-last-child(4)").show();
			$("ul li:nth-last-child(5)").show();
		}
		
	});
	function redoundo(){
		$('.btn4').css('background-color','white');
		$('.btn4').attr('disabled','false');
	}
	
	