$(document).ready(function(){





	const leetmax= 200;

	$('main').mousemove(function(event){
		
		let cursorX = event.pageX / $(this).width();

		let settingX= Math.floor(cursorX * leetmax);
	

	
		$('#title').css({"--leet-axis":settingX
		
		});
	

		$('#explain').css({"--leet-axis":settingX
		
		});


		$('#window1').css({"--leet-axis":settingX
		
		});

		$('#window2').css({"--leet-axis":settingX
		
		});

		$('#window3').css({"--leet-axis":settingX
		
		});

		$('#window4').css({"--leet-axis":settingX
		
		});





	});
	


});
	