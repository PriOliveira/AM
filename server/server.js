var http = require ('http');
var fs = require('fs');

var port = 8080;

http.createServer((request, response) => {
  // response.writeHead(200);
  // response.write("<p>Dog is running</p>");
  // setTimeout(function(){
  //   response.write("<p>Dog is done</p>");
  //   response.end();
  // }, 5000);

  var newFile = fs.createWriteStream("readme_copy.md");
  request.pipe(newFile);

  request.on('end', ()=>{
    response.end('uploaded!');
  });
}).listen(port);
