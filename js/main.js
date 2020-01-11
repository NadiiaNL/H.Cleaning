function myFunction(x) {
	x.classList.toggle('change');
	var y = document.getElementById('header__menu');
	if (y.className === 'header__menu menu') {
		y.className += ' responsive';
	} else {
		y.className = 'header__menu menu';
	}
}
