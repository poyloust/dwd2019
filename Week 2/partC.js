/*
The user enters a URL in a form field, 
presses submit, and the site returns that HTML as the response
—not as a string on the page.
*/

var express = require('express');
var app = express();
var port = 8000;

app.use(express.static('publicC'));

app.listen(port, function(){
    console.log('listening port:8000');
});

app.get('/processit', function(req,res){
    var url = req.query.link;
    res.redirect("http://" + url);
})