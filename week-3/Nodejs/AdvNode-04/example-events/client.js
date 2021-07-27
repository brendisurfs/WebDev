// client emits command, server emits response

// cmds;

const eventEmitter = require("events");
const { spawn } = require("child_process");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const client = new eventEmitter();
const server = require("./server")(client);

server.on("response", (resp) => {
    // clears before writing
    rl.output.write("\u001B[2J\u001B[0;0f");
    rl.output.write(resp);
    process.stdout.write("\n>");
});

let command, args;
rl.on("line", (input) => {
    [command, ...args] = input.split(" ");
    readline.clearLine(rl.output);
    client.emit("command", command, args);
});
