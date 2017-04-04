var fs = require('fs');

function save(obj){
    var data = "text/json; charset=utf-8," + encodeURIComponent(JSON.stringify(obj, null, "\t"));

    fs.writeFile('db.json', data, function (error){
      if(error) {
        return console.log(error);
      }
    });
}

function read(){

	// importFile = JSON.parse(db.json);

};
