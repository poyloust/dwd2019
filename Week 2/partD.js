/* An express app that serves your static page. 
   with external img and css file
*/

var express = require('express');
var app = express();
var port = 3000;

app.use(express.static('publicD'));
app.listen(3000,function(){
    console.log('listening port 3000.');
});

