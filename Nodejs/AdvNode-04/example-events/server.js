const EventEmitter = require("events");

class Server extends EventEmitter {
    constructor(client) {
        super();
        process.nextTick(() => {
            this.emit("response", "type a command (help to list commands)");
        });
        client.on("command", (command, args) => {
            // commands we want to implement are:
            // help, add, ls, del
            switch (command) {
                case "help":
                case "add":
                case "ls":
                case "del":
                    this[command](args);
                    break;
                case "exit":
                    process.exit(1);
                default:
                    this.emit("response", "unknown command.");
            }
        });
    }
    help() {
        this.emit("response", "help...");
    }
    add(args) {
        this.emit("response", args.join(" "));
    }
    ls() {
        this.emit("response", "ls...");
    }
    del() {
        this.emit("response", "delete...");
    }
}

module.exports = (client) => new Server(client);
