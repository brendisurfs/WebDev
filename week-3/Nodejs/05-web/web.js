const http = require("http");

const requestListener = (req, res) => {
    // .end is like .write > .end.
    // .end is NOT optional.
    console.log(req.url);
    res.end("hello nerds");
}

const server = http.createServer();
server.on("request", requestListener); 

// if server emitter is successful, connect.
server.listen(4242, ()=> {
    console.log(`server is running .`);
})