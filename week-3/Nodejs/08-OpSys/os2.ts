import os from "os";
import {createHmac} from "crypto";

console.log('os plat: ', os.platform());

console.log(os.loadavg());

const secret = 'brendan p';

const hash = createHmac(`sha256`, secret)
    .update("brendan is cool")
    .digest('hex');

console.log(hash);


