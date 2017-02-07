class Request {
  get(url){
    return new Promise((resolve, reject) => {
      let req = new XMLHttpRequest();

      req.open('GET', url);

      req.onload(){
      	if(req.status === 200)
      	  resolve(JSON.parse(req.response));
      	else
      	  reject(req.statusText);
      }

      req.onerror(){
      	reject(Error("Network error"));
      }

      req.send();
    });
  }

  post(url, payload, contentType='application/json'){
    return new Promise((resolve, reject) => {
      let req = new XMLHttpRequest();

      req.open('POST', url);
      req.setRequestHeader('Content-type', contentType);

      req.onload(){
      	if(req.status === 200)
      	  resolve(req.response);
      	else
      	  reject(req.response);
      }

      req.onerror(){
      	reject(Error("Network error"));
      }

      req.send(JSON.stringfy(payload));
    });
  }

  update(url, payload, contentType='application/json'){
    return new Promise((resolve, reject) => {
      let req = new XMLHttpRequest();

      req.open('PATCH', url);
      req.setRequestHeader('Content-type', contentType);

      req.onload(){
      	if(req.status === 200)
      	  resolve(req.response);
      	else
      	  reject(req.response);
      }

      req.onerror(){
      	reject(Error("Network error"));
      }

      req.send(JSON.stringfy(payload));
    });
  }

  remove(url, payload, contentType='application/json'){
    return new Promise((resolve, reject) => {
      let req = new XMLHttpRequest();

      req.open('DELETE', url);
      req.setRequestHeader('Content-type', contentType);

      req.onload(){
      	if(req.status === 204)
      	  resolve(req.response);
      	else
      	  reject(req.response);
      }

      req.onerror(){
      	reject(Error("Network error"));
      }

      req.send(JSON.stringfy(payload));
    });
  }
}

export default Request;
