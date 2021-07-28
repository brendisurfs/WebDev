const dgram = require('dgram');

const PORT = 3333;
const HOST = `127.0.0.1`;
// to listen to the udp server.

const server = dgram.createSocket("udp4");
server.bind(PORT,HOST);

server.on('listening',() => console.log(`udp server listening`));

server.on('message',(msg, rinfo)=> {
    console.log(`${rinfo.address}:${rinfo.port} - ${msg}`);
})


// CLIENT

const client = dgram.createSocket('udp4');
const msg = Buffer.from('pluralsight rocks');


client.send(msg, 0, 11, PORT, HOST, (err)=> {
    if (err) throw err;

    console.log('udp message sent');    
    client.close();
});