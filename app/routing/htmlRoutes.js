const path = require('path');

module.exports = function(app){
	app.get('/survey', function(req, res){
		//when user goes to this path it sends them to survey.html
		res.sendFile(path.join(__dirname + '/../public/survey.html'))
	});
	//directs the user to home if any other path is tried
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'))
	})
}