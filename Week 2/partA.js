/* 
An Express app that prints “Hello, world!”
*/

var express = require('express');
var app = express();

app.get("/", function(req,res){
    console.log('Hello World');
});
app.get("/test/", function(req,res){
    console.log('Hello Again World');
});
app.listen(8000, function(){
    console.log('listening port:8000');
});
