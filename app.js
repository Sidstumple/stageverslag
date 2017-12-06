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
		image: 'url("public/img/entrepotdok.png") no-repeat',
		type: 'toc',
		color: '#52d2c6',

		columnspan: 'span 1',
		rowspan: 'span 2',
		columnstart: '2',
		rowstart: '2',

		smallcolumnspan: 'span 1',
		smallrowspan: 'span 1',
		smallrow: '1',
		smallcolumn: '2'

	}, {
		slug: 'over-matise',
		title: 'Over Matise',
		image: 'url("public/img/horse.jpg") no-repeat',
		type: 'toc',
		color: '#5ebfdd',

		columnspan: 'span 2',
		rowspan: 'span 1',
		columnstart: '3',
		rowstart: '1',

		smallcolumnspan: 'span 2',
		smallrowspan: 'span 1',
		smallrow: '1',
		smallcolumn: '3'
	}, {
		slug: 'over-mijn-begeleider',
		title: 'Over mijn begeleider',
		image: 'url("public/img/nerf.jpg") no-repeat',
		type: 'toc',
		color: '#aedc78',

		columnspan: 'span 1',
		rowspan: 'span 1',
		columnstart: '5',
		rowstart: '1',

		smallcolumnspan: 'span 1',
		smallrowspan: 'span 1',
		smallrow: '1',
		smallcolumn: '5'
	}, {
		slug: 'werkzaamheden',
		title: 'Werkzaamheden',
		image: 'url("public/img/vimn.gif") no-repeat',
		type: 'toc',
		color: '#52d2c6',

		columnspan: 'span 2',
		rowspan: 'span 2',
		columnstart: '1',
		rowstart: '4',

		smallcolumnspan: 'span 2',
		smallrowspan: 'span 1',
		smallrow: '2',
		smallcolumn: '1'
	}, {
		slug: 'leerdoelen',
		title: 'Leerdoelen',
		image: 'url("public/img/kurk.gif") no-repeat',
		type: 'toc',
		color: '#aedc78',

		columnspan: 'span 2',
		rowspan: 'span 3',
		columnstart: '4',
		rowstart: '3',

		smallcolumnspan: 'span 2',
		smallrowspan: 'span 1',
		smallrow: '2',
		smallcolumn: '3'
	}, {
		slug: 'observatie-opdrachten',
		title: 'Observatie opdrachten',
		image: '#52d2c6',
		type: 'toc',
		color: '#5ebfdd',

		columnspan: 'span 1',
		rowspan: 'span 2',
		columnstart: '3',
		rowstart: '2',

		smallcolumnspan: 'span 1',
		smallrowspan: 'span 1',
		smallrow: '3',
		smallcolumn: '1'
	}, {
		slug: 'analyse-feedbackformulieren',
		title: 'Analyse feedbackformulieren',
		image: '#ff9189',
		type: 'toc',
		color: '#aedc78',

		columnspan: 'span 2',
		rowspan: 'span 1',
		columnstart: '4',
		rowstart: '2',

		smallcolumnspan: 'span 2',
		smallrowspan: 'span 1',
		smallrow: '3',
		smallcolumn: '2',
	}, {
		slug: 'conclusies',
		title: 'Conclusies',
		image: '#c68ad0',
		type: 'toc',
		color: '#52d2c6',

		columnspan: 'span 1',
		rowspan: 'span 2',
		columnstart: '3',
		rowstart: '4',

		smallcolumnspan: 'span 1',
		smallrowspan: 'span 1',
		smallrow: '3',
		smallcolumn: '4',
	}, {
		slug: 'stageplan',
		title: 'Stageplan',
		image: '#5ebfdd',
		type: 'bijlage',
		color: '#5ebfdd',
		columnspan: 'span 1',
		rowspan: 'span 1',
		columnstart: '6',
		rowstart: '2',

		smallcolumnspan: 'span 1',
		smallrowspan: 'span 1',
		smallrow: '2',
		smallcolumn: '5',
	}, {
		slug: 'feedbackformulieren',
		title: 'Feedbackformulieren',
		image: '#ff8095',
		type: 'bijlage',
		color: '#ffcd62',
		columnspan: 'span 2',
		rowspan: 'span 1',
		columnstart: '2',
		rowstart: '4',

		smallcolumnspan: 'span 2',
		smallrowspan: 'span 1',
		smallrow: '4',
		smallcolumn: '1',
	}, {
		slug: 'producten',
		title: 'Producten',
		image: '#ffcd62',
		type: 'bijlage',
		color: '#52d2c6',
		columnspan: 'span 1',
		rowspan: 'span 1',
		columnstart: '5',
		rowstart: '3',

		smallcolumnspan: 'span 2',
		smallrowspan: 'span 1',
		smallrow: '4',
		smallcolumn: '3',
	}, {
		slug: 'logboek',
		title: 'Logboek',
		image: '#aedc78',
		type: 'bijlage',
		color: '#ffcd62',
		columnspan: 'span 2',
		rowspan: 'span 2',
		columnstart: '4',
		rowstart: '4',

		smallcolumnspan: 'span 1',
		smallrowspan: 'span 2',
		smallrow: '3',
		smallcolumn: '5'
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
