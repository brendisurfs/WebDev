function startGame() {
    const playerName: string = "audrey";
    logPlayer(playerName);
}


function logPlayer(player: string): void {
    console.log(`starting a new game: ${player}`);
}

// null checks
// using strict null checks with unions

let nullstr : string | null;
nullstr = null;
nullstr = "nice";


const checkNull = () => {

// CONTROL FLOW TYPE ANALYSIS
let msgElement: HTMLElement | null;

if (typeof msgElement === 'string') {
    return msgElement;
} else {
    return msgElement;
}

msgElement = document.getElementById("message");
}