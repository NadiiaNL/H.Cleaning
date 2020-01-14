function myFunction(x) {
	x.classList.toggle('change');
	var y = document.getElementById('header__menu');
	if (y.className === 'header__menu menu') {
		y.className += ' responsive';
	} else {
		y.className = 'header__menu menu';
	}
}
$('.intro__slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 500,
	fade: true,
	dots: true,
	arrows: false
});
$('.services__slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	prevArrow:
		'<button type="button" class="services__slider-button services-prev">&#xf053;</button>',
	nextArrow:
		'<button type="button" class="services__slider-button services-next">&#xf054;</button>'
});
