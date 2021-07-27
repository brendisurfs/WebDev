// GOAL: build a small, barebones chat server.
// uses net and emitters to talk with eachother.
//
const server = require("net").createServer();

let counter = 0;
let sockets = {};

server.on("connection", (socket) => {
    socket.id = counter++;

    sockets[socket.id] = socket;

    console.log("client connected");
    socket.write("welcome new client!\n");

    // when client types, we get a buffer.
    socket.on("data", (data) => {
        // now, echo data back to the user.
        Object.entries(sockets).forEach(([_, cs]) => {
            cs.write(`${socket.id}: `);
            cs.write(data);
        });
    });
    // socket has an 'end' emitter, that means you cant do anything with the socket anymore
    socket.on("end", () => {
        delete sockets[socket.id];

        // tell which person disconnected.
        console.log(`client ${socket.id} disconnected`);
    });
    // can set global encoding
    socket.setEncoding("utf-8");
});

server.listen(8000, () => console.log("server bound"));
