/*
An Express app that prompts the user, using an input field, 
to enter the name of their favorite band. 
This should be submitted as a GET parameter (querystring). 
If they’ve submitted a value in the form, 
the resulting page should insult their favorite band (by name) 
using one of at least 3 randomly selected insults.

insult contents from https://autoinsult.com/index.php?style=3

*/


var express = require('express');
var app = express();
var port = 3000;

app.use(express.static('publicB'));
var insults = ["ridiculous bowl of fungus-covered llama spit","empty-headed bag of fermenting budgie carcasses","malevolent earful of psychotic bile"];

app.listen(port, function(){
    console.log('listening port:3000');
});

app.get('/processit',function(req,res){
    var bandName = req.query.band;
    var x = Math.floor(Math.random() * 2);
    console.log(x);
    res.send(bandName + " is " + insults[x]);
});
