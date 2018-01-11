var express = require('express');
var app = express();

var sass = require('node-sass');
sass.render({
	file: 'static/scss/style.scss',
}, function(err, result) {
	if (err) {
		console.log(err);
	}
});



var scope = {
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
			smallrowspan: 'span 2',
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
			image: '#ff9189',
			type: 'toc',
			color: '#aedc78',

			columnspan: 'span 1',
			rowspan: 'span 1',
			columnstart: '5',
			rowstart: '1',

			smallcolumnspan: 'span 1',
			smallrowspan: 'span 2',
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
			smallrowspan: 'span 2',
			smallrow: '3',
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
			smallrowspan: 'span 2',
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
			smallrow: '4',
			smallcolumn: '3'
		}, {
			slug: 'analyse-feedbackformulieren',
			title: 'Analyse feedbackformulieren',
			image: 'url("public/img/nerf.jpg") no-repeat',
			type: 'toc',
			color: '#aedc78',

			columnspan: 'span 2',
			rowspan: 'span 1',
			columnstart: '4',
			rowstart: '2',

			smallcolumnspan: 'span 2',
			smallrowspan: 'span 1',
			smallrow: '4',
			smallcolumn: '4',
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
			smallcolumn: '5',
		}, {
			slug: 'verslag-nulmeting',
			title: 'Verslag 0-meting',
			image: '#ff8095',
			type: 'bijlage',
			color: '#52d2c6'
		},
		{
			slug: 'stageplan',
			title: 'Stageplan',
			image: '#5ebfdd',
			type: 'bijlage',
			color: '#5ebfdd',
			link: 'https://www.dropbox.com/s/vtlvh9q86ib8xa8/Stageplan_CydStumpel.pdf?dl=0'
		}, {
			slug: 'feedbackformulieren',
			title: 'Feedbackformulieren',
			image: '#ff8095',
			type: 'bijlage',
			color: '#ffcd62',
			link: ''
		}
	]
}

app.use(express.static('./'))
app.set('view engine', 'ejs'); //render all htmlvia ejs


app.get('/', function(req, res) {
	res.render('index', {
		chapters: scope.chapters,
		url: process.env.BROWSER_REFRESH_URL
	}); //renders index.ejs
})

app.listen(process.env.PORT || 3000, function() {
	console.log('Starting server at port 3000');
	if (process.send) {
		process.send({
			event: 'online',
			url: 'http://localhost:3000'
		});
	}
});
