var gatherPoint = document.querySelector('.werkzaamheden');
var toc = document.querySelector('.table-of-contents');
var logo = document.querySelector('.logo-matise');
var menuOpen = document.querySelector('.menu-icon');


document.addEventListener('scroll', function() {
	var top = gatherPoint.getBoundingClientRect().top;
	if (top <= 0) {
		toc.classList.add('gather');
		logo.classList.add('episch');
	} else {
		toc.classList.remove('gather');
		toc.classList.remove('show-toc');
		menuOpen.classList.remove('menu-opened');
		logo.classList.remove('episch');
	}
})

menuOpen.addEventListener('click', function() {
	menuOpen.classList.toggle('menu-opened');
	if (menuOpen.classList.contains('menu-opened')) {
		toc.classList.add('show-toc');
	} else {
		toc.classList.remove('show-toc');
	}
})
