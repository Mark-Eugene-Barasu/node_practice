"use strict";

const http = require("http");
const port = 3000;
const httpStatus = require("http-status-codes");
const app = http.createServer()

app.on("request", (req, res) => {
    res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    });
    
    let responseMessage = "<h1>This will show on the screen</h1>";
    res.end(responseMessage);

    console.log(`Sent a response: ${responseMessage}`);
});


app.listen(port);
console.log(`Server running at http://localhost:${port}/`);
