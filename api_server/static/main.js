function showBooks(){
    var oReq = new XMLHttpRequest();
    oReq.onload = function(xhr){
    console.log(xhr);
        var books = JSON.parse(xhr.target.responseText);
        var titles = document.getElementById("titles")
        titles.innerHTML = "";

        for(var  i = 0 ; i < books.length ; i++){
            var node = document.createElement("p");
            node.addEventListener('click', function(id){deleteBook(id)}.bind(this, books[i].id), false);
            var textnode = document.createTextNode(books[i].originalTitle);
            node.appendChild(textnode);

            titles.appendChild(node);
        }
    };
    oReq.open("GET", "/api/books", true);
    oReq.send();
}

function deleteBook(id){
    var oReq = new XMLHttpRequest();
    oReq.onload = function(xhr){
        if(xhr.target.status == 204){
            showBooks();
        } else {
            var data = JSON.parse(xhr.target.responseText);
            console.warn('ERROR: ' + data.error);
        }
    };
    oReq.open("DELETE", "/api/books/" + String(id), true);
    oReq.send();
}