const http = require('http')
const server = http.createServer((req, res) => {
    // console.log("req", req);
    console.log("req.url", req.url);

    // console.log("res", res);
    if (req.url === '/') {

        console.log("Request is for homepage");
        res.end('Welcome to our server')
    }
    else if (req.url === '/about') {
        console.log(" Request is for About page");
        res.end("Thank you")
    } else {
        res.end(`<h1>Oops Something is wrong</h1>
    <p>back To Home </p>
    <a href="/">Back Home </a>`)
    }

    // res.write('Welcome to our server')
    // res.end()

})

server.listen(5252)
