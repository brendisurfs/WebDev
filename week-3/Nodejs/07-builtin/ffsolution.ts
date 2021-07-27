// SOLUTION FOR FILES OLDER THAN 7 DAYS

import fs from "fs";
import path from "path";

const dirname = path.join(__dirname, "files");

const files = fs.readdirSync(dirname);
const ms1day = 24*60*60*1000;

files.map(file => {
    let fpath = path.join(dirname, file);
    fs.stat(fpath, (err, stats)=> {
        if (err) throw err;

        if((Date.now() - stats.mtime.getTime() > 7 * ms1day)) {
            fs.unlink(fpath, (err)=>{
                if (err) throw err;

                console.log(`deleted ${fpath}`);
                
            })
        }
    })
})