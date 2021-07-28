const dns = require("dns");

dns.lookup('pluralsight.com', (err, addr)=> {
    console.log(addr);
});
// this will be using libuv threads.

dns.resolve4('pluralsight.com', (e, addr)=> {
    console.log(addr);
});

// reverse method
dns.reverse('52.35.255.4', (e, hostnames)=> {
    console.log(hostnames);
});

