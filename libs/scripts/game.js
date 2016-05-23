$(document).ready(function () {

	$('.character').click(function () {
		$('.character').removeClass('character--active');
		$(this).addClass('character--active');
	})

	// var statsHeight;
	//
	// $('.stats').each(function () {
	// 	statsHeight = $(this).outerHeight();
	// 	$('.stats').css('height', 0);
	// 	$(this).css('height', statsHeight)
	// });

});
