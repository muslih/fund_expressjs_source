var express = require('express'), 
    app     = express();

app.get('/', function (req, res){
   res.send('halo dunia');
});

app.listen(3000, function(){
  console.log("listening on port 3000");
});
