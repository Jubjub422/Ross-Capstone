//fetchIt takes parameters of a url, a method (default of "GET"), and a body (default of null)
export const fetchIt = (url, method = "GET", body = null) => {
    let options = {
        "method": method,
        "headers": {}
    }

    //evaluate the value of method, and execute the case it applies to.
    switch (method) {
        //if the method is POST, add the content-type property onto the headers property
        //this happens because there is no break line included in POST case, so it skips to the next case.
        case "POST":
        //if the method is PUT, add the content-type property onto the headers property
        //fall through
        case "PUT":
            options.headers = {
                "Content-Type": "application/json"
            }
            break;
        //if the method is anything else other than the above, do nothing (break).
        default:
            break;
    }

    //if a body parameter was entered, use it to add a body property onto the options object
    if (body !== null) {
        options.body = body
    }

    //function returns a fetch with the url and options arguments as parameters, parsed as javascript
    return fetch(url, options).then(r => r.json())
}