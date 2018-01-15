(function() {
	var config = {
		gatherPoint: document.querySelector('.werkzaamheden'),
		toc: document.querySelector('.table-of-contents'),
		logo: document.querySelector('.logo-matise'),
		menuOpen: document.querySelector('.menu-icon'),
		allSections: document.querySelectorAll('section'),
		allIds: [],
		smallSlideControls: document.querySelectorAll('.slide-controls.small-controls'),
		largeSlideControls: document.querySelectorAll('.slide-controls.large-controls'),
		disco: document.getElementById('disco')
	};

	var app = {
		init: function() {
			listen.events();
			listen.hash();
			check.window();
			slideshow.startSmall();
			slideshow.startLarge();
		}
	};

	var listen = {
		events: function() {
			document.addEventListener('scroll', function() {
				var bottom = config.gatherPoint.getBoundingClientRect().bottom;
				if (bottom <= 0) {
					config.toc.classList.add('gather');
					config.logo.classList.add('episch');
					if (config.menuOpen.classList.contains('menu-opened')) {
						screen.smaller();
					}
				} else {
					config.toc.classList.remove('gather');
					config.logo.classList.remove('episch');
					screen.larger();
				}
			});
			config.menuOpen.addEventListener('click', function() {
				config.menuOpen.classList.toggle('menu-opened');
				if (config.menuOpen.classList.contains('menu-opened')) {
					screen.smaller();
					config.toc.classList.add('show-toc');
				} else {
					screen.larger();
					config.toc.classList.remove('show-toc');
				}
			});
			config.disco.addEventListener('click', function(e) {
				console.log('click');
				document.querySelectorAll('a').forEach(function(discoLink) {
					console.log(discoLink);
					discoLink.classList.add('disco');
				})
			})
		},
		hash: function() {
			config.allSections.forEach(function(section) {
				if (section.id) {
					config.allIds.push(section.id);
				}
			});
			scroll.intoView(config.allIds);
		}
	};

	var screen = {
		smaller: function() {
			config.allSections.forEach(function(section) {
				section.classList.add('smaller');
			})
		},
		larger: function() {
			config.allSections.forEach(function(section) {
				section.classList.remove('smaller');
			})
		}
	}

	var check = {
		window: function() {
			//automagically open menu when viewport is wider than 1160px
			if (window.innerWidth > 1160) {
				config.menuOpen.classList.toggle('menu-opened');
				config.toc.classList.add('show-toc');
				screen.smaller();
			}
			//replace collage with slideshow when viewport is smaller than 800px
			if (window.innerWidth < 800) {
				document.querySelectorAll('.collage-1').forEach(function(collage) {
					collage.classList.add('slide-show');
				})
			}
			//when screen resizes check again for viewport width
			window.addEventListener('resize', function() {
				if (window.innerWidth > 1160) {
					config.menuOpen.classList.toggle('menu-opened');
					config.toc.classList.add('show-toc');
					screen.smaller();
				} else {
					config.menuOpen.classList.remove('menu-opened');
					config.toc.classList.remove('show-toc');
				}
				if (window.innerWidth < 800) {
					document.querySelectorAll('.collage-1').forEach(function(collage) {
						collage.classList.add('slide-show');
					})
				} else {
					document.querySelectorAll('.collage-1').forEach(function(collage) {
						collage.classList.remove('slide-show');
					})
				}
			})
		}
	}

	var scroll = {
		intoView: function(hashes) {
			hashes.forEach(function(hashtag) {
				document.getElementById(hashtag).addEventListener('click', function(e) {
					if (e.target.hash) {
						e.preventDefault();
						document.querySelector(e.target.hash).scrollIntoView({
							block: 'start',
							behavior: 'smooth'
						});
						setTimeout(function() {
							location.hash = e.target.hash;
						}, 600);
					}
				})
			});
		}
	};

	var slideshow = {
		startSmall: function() {
			config.smallSlideControls.forEach(function(controls) {
				controls.addEventListener('click', function(e) {
					console.log(e.target.parentNode.parentNode.firstElementChild);
					e.target.parentNode.parentNode.firstElementChild.classList.toggle('switch')
				})
			});
		},
		startLarge: function() {
			config.largeSlideControls.forEach(function(largecontrol) {
				largecontrol.addEventListener('click', function(e) {
					if (e.target.classList.contains('next')) {
						nextSlide();
					} else {
						previousSlide();
					}


					function nextSlide() {
						var slides = [];
						for (var i = 0; i < e.target.parentNode.parentNode.children.length; i++) {
							slides.push(e.target.parentNode.parentNode.children[i]);
						}
						slides.forEach(function(el) {
							if (el.classList.contains('photo')) {
								if (el.classList.contains('switch')) {
									if (el.nextElementSibling.classList.contains('photo')) {
										setTimeout(function() {
											el.classList.remove('switch');
											el.nextElementSibling.classList.add('switch');
										}, 100);
									} else {
										el.classList.remove('switch');
										e.target.parentNode.parentNode.children[0].classList.add('switch');
									}
								}
							}
						})
					}

					function previousSlide() {
						var slides = [];
						for (var i = 0; i < e.target.parentNode.parentNode.children.length; i++) {
							slides.push(e.target.parentNode.parentNode.children[i]);
						}
						slides.forEach(function(el) {
							if (el.classList.contains('photo')) {
								if (el.classList.contains('switch')) {
									if (el.previousElementSibling) {
										if (el.previousElementSibling.classList.contains('photo')) {
											setTimeout(function() {
												el.classList.remove('switch');
												el.previousElementSibling.classList.add('switch');
											}, 100);
										}
									} else {
										var number = e.target.parentNode.parentNode.children.length - 2;
										console.log(number);
										setTimeout(function() {
											e.target.parentNode.parentNode.children[number].classList.add('switch');
											el.classList.remove('switch');
										}, 100);
									}
								}
							}
						})
					}
				});
			});
		}
	}

	app.init();
})();
