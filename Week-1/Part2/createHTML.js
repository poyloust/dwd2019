var fileSys = require('fs');
var createHTML = require('create-html')

var htmlContent = createHTML({
    title:'testing',
    body:'<p>this was generated from command line</p>'
})
fileSys.appendFile('index.html', htmlContent, function (err) {
  if (err) console.log(err);
  console.log('new file!');

});