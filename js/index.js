// Menu
const menuBtn = document.querySelector('.header__menu');
const headerNav = document.querySelector('.header__nav');
menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('active');
	document.body.classList.toggle('lock');
	headerNav.classList.toggle('active');
});