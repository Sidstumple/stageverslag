var gatherPoint = document.querySelector('.stageplan');
var toc = document.querySelector('.table-of-contents');
var logo = document.querySelector('.logo-matise');


document.addEventListener('scroll', function() {
	var top = gatherPoint.getBoundingClientRect().top;
	console.log(top);
	if (top <= 0) {
		toc.classList.add('gather');
		logo.classList.add('episch');
	} else {
		toc.classList.remove('gather');
		logo.classList.remove('episch');

	}
})
