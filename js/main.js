function myFunction(x) {
	x.classList.toggle('change');
	var y = document.getElementById('header__menu');
	if (y.className === 'header__menu menu') {
		y.className += ' responsive';
	} else {
		y.className = 'header__menu menu';
	}
	var z = document.getElementById('btn-orange');
	if (z.className === 'header__btn-orange btn-orange') {
		z.className += ' responsive-btn';
	} else {
		z.className = 'header__btn-orange btn-orange';
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
		'<button type="button" class="services__slider-button services-next">&#xf054;</button>',
	responsive: [
		{
			breakpoint: 1440,
			settings: {
				slidesToShow: 2,
				arrows: false,
				dots: true
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				dots: true
			}
		}
	]
});

filterSelection('all');
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName('project__gallery-item');
	if (c == 'all') c = '';
	// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
	for (i = 0; i < x.length; i++) {
		w3RemoveClass(x[i], 'show');
		if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], 'show');
	}
}

// Show filtered elements
function w3AddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(' ');
	arr2 = name.split(' ');
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += ' ' + arr2[i];
		}
	}
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(' ');
	arr2 = name.split(' ');
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(' ');
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById('project__nav');
var btns = document.getElementsByClassName('project__nav-item');
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', function () {
		var current = document.getElementsByClassName('project__nav-item--active');
		current[0].className = current[0].className.replace('project__nav-item--active', '');
		this.className += ' project__nav-item--active';
	});
}
var slideIndex = 1;
showSlides(slideIndex);
function slidesPlus(n) {
	showSlides(slideIndex += n);
}
function currentSlide(n) {
	showSlides(slideIndex = n);
}
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length }
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}