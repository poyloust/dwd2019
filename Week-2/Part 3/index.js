/*
An Express app that prompts the user, using an input field, 
to enter the name of their favorite band. 
This should be submitted as a POST parameter 
If they’ve submitted a value in the form, 
the resulting page should insult their favorite band (by name) 
using one of at least 3 randomly selected insults.

insult contents from https://autoinsult.com/index.php?style=3

*/


var express = require('express')
var bodyParser = require('body-parser');

var app = express()
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var port = 3000 || process.env.PORT

var insults = ["ridiculous bowl of fungus-covered llama spit","empty-headed bag of fermenting budgie carcasses","malevolent earful of psychotic bile"];

app.use(urlencodedParser); 

app.use(express.static('static'));

app.post('/processit', function(req, res){
    var bandName = req.body.band;
    var x = Math.floor(Math.random() * 2);
    res.send(bandName + " is " + insults[x]);
})
app.listen(port, () => console.log('Example app listening on port' + port));