
// equal sign here defines a default value if none is given. also can do: ?
function sendGreeting(greeting: string = "good morning"): void {
    console.log(greeting);
}

function newGreeting(greet?: string): void {
    if (greet === "") {
        console.log("heyo!");
    }
    console.log(greet);
}

// fat arrow short syntax

let squareit = (x: number) => x * x;

let scores: number[] = [10, 20, 30, 40];

let highScores: number[];

highScores = scores.filter((el, i?, arr?) => {
    if (el > 10) {
        return true;
    }
});

function logError(err: string): void {
    console.error(err);
}
let score = scores[0];

let logger: (value: string) => void;

if (score < 0) {
    logger = logError;
}