$(document).ready(function(){

	//Bounce function
	function bounce(item){
		item.animate({
			'margin-top': '1.5em',
		}, 500, function(){
			item.animate({
				'margin-top': '2em',
			}, 500, function(){
				bounce(item);
			});
		});
	}

	//Slide function for "program" buttons + change BackgroundImage
	function slideToggle(section){
		$(section + ' .TitleSlideToggle').click(function(e){
			$(section + ' .TitleSlideToggle h3').toggleClass('toggled');
			$(section + ' .slideToggle').slideToggle('slow');
		});
	}

	//Hide "program" zones to let them visible if Js desactivated
	$('.slideToggle').css('display', 'none');

	slideToggle('.sectionIcons');
	slideToggle('.sectionProgramme');
	slideToggle('.sectionReponses');
	slideToggle('.sectionPresentation');

	//Show the banner Image at maximum device Height
	$('.header').css('height', $(window).height());

	//Smooth scroll effect when click on GoToNext button
	$('.GoToNext a').click(function(){
		var target = $(this).attr('href');

		$('html, body').animate({ scrollTop: $(target).offset().top }, 750 );
	});

	bounce($('.GoToNext'));
})