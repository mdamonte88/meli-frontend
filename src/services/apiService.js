class Api {
    callAPI(uri, requestData = {}) {
      const apiUrl = 'http://localhost:5000/api'
      const url = `${apiUrl}${uri}`;
      const headers = {
        "Accept": 'application/json',
        "Content-Type": "application/json"
      }
  
      return new Promise((resolve, reject) => {
  
        fetch(url, { method: requestData.method, headers: headers, body: requestData.body})
        .then(res => {
          return res.json()
        })
        .then(response => resolve(response))
        .catch(error => reject(error));
      });
  
    }
  
    get(uri) {
      const requestData = {
        method: 'GET'
      };
      return this.callAPI(uri, requestData);
    }
  
    post(uri, decamelizeData) {    
      const requestData = {
        method: 'POST',
        body: JSON.stringify(decamelizeData)
      };
      return this.callAPI(uri, requestData);
    }
  
    put(uri, decamelizeData) {    
      const requestData = {
        method: 'PUT',
        body: JSON.stringify(decamelizeData)
      };
      return this.callAPI(uri, requestData);
    }
  }
  
  export default new Api();
  