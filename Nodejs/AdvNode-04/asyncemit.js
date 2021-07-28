const fs = require("fs");
const EE = require("events");

class WithTime extends EE {
    execute(asyncFn, ...args) {
        console.time('execute'); 
        this.emit('begin');
        asyncFn(...args, (err, data)=> {
            if (err) {
                return this.emit('error', err);
            }
            this.emit('data', data);
            console.timeEnd('execute');
            this.emit("end");
        });
    }
}

const withTime = new WithTime();

withTime.on("begin", () => console.log('about to exec'));
withTime.on("end", ()=> console.log('done with exec'));
withTime.on("data", (data)=> {
    console.log(`len: ${data.length}`);
})

withTime.on("error", ()=> console.error());

withTime.execute(fs.readFile, __filename);
