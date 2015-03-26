var express = require('express'),
    app     = express();

var names = [];

app.get('/',function(req, res){
	res.render('index.jade',{names: names});
});
