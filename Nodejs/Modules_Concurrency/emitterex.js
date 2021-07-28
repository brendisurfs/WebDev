const EventEmitter = require("events");

const myEmitter = new EventEmitter();

// we fire an emit event.
myEmitter.emit("TEST_EVENT");

// .on is to listen for the emitter. 
// takes a callback. 

myEmitter.on("TEST_EVENT", ()=> {
    console.log("test event fired ");
});

/**A GOOD THING TO KNOW: look at order of events. 
 * Emitter is not a continuous thing here. 
 * SO: even though we emit the event, we WERE NOT SUBSCRIBED to the actual event when it fired. 
 * So nothing will log. */

