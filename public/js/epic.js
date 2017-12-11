var gatherPoint = document.querySelector('.werkzaamheden');
var toc = document.querySelector('.table-of-contents');
var logo = document.querySelector('.logo-matise');
var menuOpen = document.querySelector('.menu-icon');
var allSections = document.querySelectorAll('section');


document.addEventListener('scroll', function() {
	var top = gatherPoint.getBoundingClientRect().top;
	if (top <= 0) {
		toc.classList.add('gather');
		logo.classList.add('episch');
	} else {
		toc.classList.remove('gather');
		logo.classList.remove('episch');
	}
})

menuOpen.addEventListener('click', function() {
	removeSmaller();
	menuOpen.classList.toggle('menu-opened');
	if (menuOpen.classList.contains('menu-opened')) {
		toc.classList.add('show-toc');
	} else {
		toc.classList.remove('show-toc');
	}
})

function removeSmaller() {
	allSections.forEach(function(section) {
		section.classList.toggle('smaller');
	})
}
