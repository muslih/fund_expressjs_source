var express = require('express'),
    bodyParser = require('body-parser'),
    app     = express();

function log(req, res, next){
	console.log(names);
	next();
}

app.use(bodyParser.urlencoded());

var names = [];

app.all('/',function(req,res, next){
	// res.send('Testing all');
	console.log('from All');
	next();
});

app.get('/',log,function(req, res){
	res.render('index.jade',{names: names});
});

app.post('/', function(req, res){
	names.push(req.body.name);
	res.redirect('/')
});

// app.put

// app.delete

app.listen(3000);
