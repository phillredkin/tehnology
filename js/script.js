// animation
new WOW().init();

//burger menu
$(document).ready(function () {
	$('.header_burger').click(function () {
		$('.header_burger, .navbar').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
