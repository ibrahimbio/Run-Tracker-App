class Request {

    // Method to perform a GET request
    get(url){
        //  Fetch data from the give url and return a promise that resolves to the parsed JSON response
        return fetch(url).then((res) => res.json())
    }

    post(url, payload){
        // Fetch data from the given URL with the specified options:
        // method: POST, headers: Content-Type as JSON, body: stringified payload
        return fetch(url, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        })
    }


}

export default Request