var express        = require('express');
var app            = express();

var port = process.env.PORT || 5000; 

app.use(express.static(__dirname + '/public')); 

app.get('*', function(req, res) {
	res.sendfile('./public/index.html');
});

// start app ===============================================
app.listen(port);	
console.log('Server running at ' + port);
exports = module.exports = app; 	