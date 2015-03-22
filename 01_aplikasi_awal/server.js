// panggil library express
var express = require('express'), 
	// deklasi aplikasi express
    app     = express();

// deklarasi route pada express
app.get('/', function (req, res){
   // respon route
   res.send('halo dunia');
});

// jalankan aplikasi pada port 300
app.listen(3000, function(){
  // tampilkan log ketika aplikasi jalan
  console.log("listening on port 3000");
});
