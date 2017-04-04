// var http = require ('http');
var fs = require('fs');
//
// var port = 8080;
//
// http.createServer((request, response) => {
//   // response.writeHead(200);
//   // response.write("<p>Dog is running</p>");
//   // setTimeout(function(){
//   //   response.write("<p>Dog is done</p>");
//   //   response.end();
//   // }, 5000);
//
//   var newFile = fs.createWriteStream("readme_copy.md");
//   request.pipe(newFile);
//
//   request.on('end', ()=>{
//     response.end('uploaded!');
//   });
// }).listen(port);

//run npm run start:server
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 9000;
const folder = 'build';
// const folder = 'public';
var app = express();
var staticAssets = path.resolve(__dirname, '..', folder);

app.use(express.static(staticAssets));

// app.get('/books', (request, response) => {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   fs.readFile('db.json', function (err, data) {
//     if (err) throw err;
//
//     response.write(data);
//     response.end();
//   });
//
// });

app.get('*', (request, response) => {
  response.send(path.resolve(__dirname, '..', folder, 'index.html'));
});

app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});
