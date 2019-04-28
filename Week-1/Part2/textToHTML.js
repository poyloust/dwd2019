var fileSys = require('fs');
var createHTML = require('create-html')
var filename = "randomTexts.txt";
var lines;
var content = "";

  
fileSys.readFile(filename,function (err, data) {
    if (err) console.log(err);
    var textArray = data.toString().split("\n");
    for(var i = 0; i < textArray.length; i++){

        content += "<h2>";
        content += textArray[i];
        content += "</h2>";
    }
    var htmlContent = createHTML({
        title:'page from texts',
        body: content
    })
    fileSys.appendFile('index2.html', content, function (err) {
        if (err) console.log(err);
        console.log('new file!');
      });
  });


  