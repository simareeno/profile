function minWidthDropdown() {
	var dropdownUser = $('.bar__personal-user').width();
	var dropdownMoney = $('.bar__personal-money').width();

	$('.bar__personal-user .dropdown__list').css( 'min-width', dropdownUser);
	$('.bar__personal-money .dropdown__list').css( 'min-width', dropdownMoney);
}

$(document).ready(function () {

	// $(".bar").load("bar.html");

	minWidthDropdown();

	$('.dropdown').click(function () {
		$('.dropdown').not(this).removeClass('dropdown--active');
		$(this).toggleClass('dropdown--active');
		event.stopPropagation();
	});

	$('html').click(function() {
		$('.dropdown').removeClass('dropdown--active');
	});
});
