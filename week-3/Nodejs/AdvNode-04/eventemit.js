const EventEmitter = require("events");

class WithLog extends EventEmitter {
    execute(taskFunc) {
        console.log('before exec');
        this.emit('begin');
        taskFunc();
        this.emit('end');
        console.log('after exec');
    }
}

const withLog = new WithLog();

withLog.on('begin', () => console.log('about to exec'));
withLog.on("end", ()=> console.log('done with exe'));

withLog.execute(() => console.log("****exectask****"));

