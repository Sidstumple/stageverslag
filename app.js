var express = require('express');
var app = express();

var sass = require('node-sass');
sass.render({
	file: 'static/scss/style.scss',
}, function(err, result) {
	console.log(err);
});

var scope = {
	// toc: [
	// 	'Inleiding',
	// 	'Over Matise',
	// 	'Over mijn begeleider',
	// 	'Werkzaamheden',
	// 	'Leerdoelen',
	// 	'Observatie opdrachten',
	// 	'Analyse Feedbackformulieren',
	// 	'Conclusies'
	// ],
	// bijlagen: [
	// 	'Stageplan',
	// 	'Feedbackformulieren',
	// 	'Producten',
	// 	'Logboek'
	// ]

	chapters: [{
		slug: 'inleiding',
		title: 'Inleiding',
		image: 'public/',
		type: 'toc',
		color: 'red',
		size: '10vw'

	}, {
		slug: 'over-matise',
		title: 'Over Matise',
		image: 'public/',
		type: 'toc',
		color: 'green',
		size: '15vw'

	}, {
		slug: 'over-mijn-begeleider',
		title: 'Over mijn begeleider',
		image: 'public/',
		type: 'toc',
		color: 'yellow',
		size: '15vw'

	}, {
		slug: 'werkzaamheden',
		title: 'Werkzaamheden',
		image: 'public/',
		type: 'toc',
		color: 'purple',
		size: '10vw'

	}, {
		slug: 'leerdoelen',
		title: 'Leerdoelen',
		image: 'public/',
		type: 'toc',
		color: 'pink',
		size: '12vw'

	}, {
		slug: 'observatie-opdrachten',
		title: 'Observatie opdrachten',
		image: 'public/',
		type: 'toc',
		color: 'lime',
		size: '10vw'

	}, {
		slug: 'analyse-feedbackformulieren',
		title: 'Analyse feedbackformulieren',
		image: 'public/',
		type: 'toc',
		color: 'teal',
		size: '15vw'

	}, {
		slug: 'conclusies',
		title: 'Conclusies',
		image: 'public/',
		type: 'toc',
		color: 'grey',
		size: '20vw'

	}, {
		slug: 'stageplan',
		title: 'Stageplan',
		image: 'public/',
		type: 'bijlage',
		color: 'black',
		size: '12vw'

	}, {
		slug: 'feedbackformulieren',
		title: 'Feedbackformulieren',
		image: 'public/',
		type: 'bijlage',
		color: 'pink',
		size: '12vw'

	}, {
		slug: 'producten',
		title: 'Producten',
		image: 'public/',
		type: 'bijlage',
		color: 'orange',
		size: '15vw'

	}, {
		slug: 'logboek',
		title: 'Logboek',
		image: 'public/',
		type: 'bijlage',
		color: 'green',
		size: '10vw'

	}]
}

app.use(express.static('./'))
app.set('view engine', 'ejs'); //render all htmlvia ejs


app.get('/', function(req, res) {
	res.render('index', {
		chapters: scope.chapters
	}); //renders index.ejs

})

app.listen(3000);
console.log('Starting server at port 3000');
