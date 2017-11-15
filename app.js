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
		columnspan: 'span 1',
		rowspan: 'span 1',
		columnstart: '3',
		rowstart: '1'
	}, {
		slug: 'over-matise',
		title: 'Over Matise',
		image: 'public/',
		type: 'toc',
		color: 'green',
		columnspan: 'span 3',
		rowspan: 'span 1',
		columnstart: '4',
		rowstart: '1'
	}, {
		slug: 'over-mijn-begeleider',
		title: 'Over mijn begeleider',
		image: 'public/',
		type: 'toc',
		color: 'coral',
		columnspan: 'span 1',
		rowspan: 'span 1',
		columnstart: '5',
		rowstart: '2'
	}, {
		slug: 'werkzaamheden',
		title: 'Werkzaamheden',
		image: 'public/',
		type: 'toc',
		color: 'purple',
		columnspan: 'span 2',
		rowspan: 'span 2',
		columnstart: '3',
		rowstart: '2'
	}, {
		slug: 'leerdoelen',
		title: 'Leerdoelen',
		image: 'public/',
		type: 'toc',
		color: 'pink',
		columnspan: 'span 1',
		rowspan: 'span 2',
		columnstart: '2',
		rowstart: '3'
	}, {
		slug: 'observatie-opdrachten',
		title: 'Observatie opdrachten',
		image: 'public/',
		type: 'toc',
		color: 'lime',
		columnspan: 'span 1',
		rowspan: 'span 1',
		columnstart: '6',
		rowstart: '2'
	}, {
		slug: 'analyse-feedbackformulieren',
		title: 'Analyse feedbackformulieren',
		image: 'public/',
		type: 'toc',
		color: 'teal',
		columnspan: 'span 2',
		rowspan: 'span 1',
		columnstart: '3',
		rowstart: '4'
	}, {
		slug: 'conclusies',
		title: 'Conclusies',
		image: 'public/',
		type: 'toc',
		color: 'grey',
		columnspan: 'span 2',
		rowspan: 'span 2',
		columnstart: '5',
		rowstart: '3'
	}, {
		slug: 'stageplan',
		title: 'Stageplan',
		image: 'public/',
		type: 'bijlage',
		color: 'black',
		columnspan: 'span 1',
		rowspan: 'span 1',
		columnstart: '1',
		rowstart: '5'
	}, {
		slug: 'feedbackformulieren',
		title: 'Feedbackformulieren',
		image: 'public/',
		type: 'bijlage',
		color: 'pink',
		columnspan: 'span 2',
		rowspan: 'span 1',
		columnstart: '2',
		rowstart: '5'
	}, {
		slug: 'producten',
		title: 'Producten',
		image: 'public/',
		type: 'bijlage',
		color: 'orange',
		columnspan: 'span 1',
		rowspan: 'span 1',
		columnstart: '4',
		rowstart: '5'
	}, {
		slug: 'logboek',
		title: 'Logboek',
		image: 'public/',
		type: 'bijlage',
		color: 'green',
		columnspan: 'span 2',
		rowspan: 'span 2',
		columnstart: '5',
		rowstart: '5'
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
