$(document).ready(function(){

	function moveTopBottom(item){
		item.animate({
			'margin-top': '1.5em',
		}, 500, function(){
			item.animate({
				'margin-top': '2em',
			}, 500, function(){
				moveTopBottom(item);
			});
		});
	}

	function slideToggle(section){
		$(section + ' .TitleSlideToggle').click(function(e){
			$(section + ' .slideToggle').slideToggle('slow');
		});
	}

	$('.slideToggle').css('display', 'none');

	slideToggle('.sectionIcons');
	slideToggle('.sectionProgramme');
	slideToggle('.reponses');


	$('.header').css('height', $(window).height());

	$('.GoToNext a').click(function(){
		var target = $(this).attr('href');

		$('html, body').animate({ scrollTop: $(target).offset().top }, 750 );
	});

	moveTopBottom($('.GoToNext'));
})