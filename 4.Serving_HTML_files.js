// import http module
const http = require("http");

// import fs module
const fs = require("fs");

const fileContent = fs.readFileSync("serve.html");

const server = http.createServer((req, res)=>{
    // writeHead(statusCode: number, reasonPhrase?: string, headers?: OutgoingHttpHeaders)
    // statusCode: 200 tells OK the action requested by the client was received, understood, and accepted.
    res.writeHead(200, {"Content-Type":"text/html"});
    res.end(fileContent)
})

server.listen(80, '127.0.0.1', ()=>{
    console.log("Listening on port 80");
})