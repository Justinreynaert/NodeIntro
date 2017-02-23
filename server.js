/**
 server.js NodeIntro
 */

var express = require('express');
var engine = require('ejs-locals');
var recept = require('./recept');
var app = express();

app.use(express.static(__dirname + '/public')); //root van static files
app.engine('ejs',engine); // gebruik ejs-locals voor alle ejs templates
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//routes
app.get('/',function(req, res){
    //res.send('Hello World')
    res.render('index.ejs', {title:'Sofies keuken'});
});



app.get('/testje', function(req, res){
    res.send('klein testjes!');
});

app.get('/recepten', recept.list);

app.get('/recepten/:title', recept.single);

app.get('/*', function(req,res){
    res.send('Sorry, de pagina ' + req.path + ' is niet beschikbaar');
});

// start server
var port = 3000;
var server = app.listen(port, function() {
    console.log('Server luistert op poort %d', port);
});