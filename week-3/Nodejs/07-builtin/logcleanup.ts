// TASK 2: 
// Clean old files in a directory. 
// anything older than 7 days should be deleted.
// we dont have access to that directory.
// 1) get file dir. 

// 2) for each file, check the date.

//  3) if the date is larger than todays date - the date it was made, delete/trash


// CREATE OUR DATED FILES
import fs from "fs";
import path from "path";

const dirname = path.join(__dirname, "files");

fs.mkdirSync(dirname);
const ms1day = 24*60*60*1000;

for (let i = 0; i < 10; i++){ 
    const fpath = path.join(dirname, `file${i}`);
    fs.writeFile(fpath, i.toString(), (err)=> {
        if (err) throw err;

        const time = (Date.now() - i*ms1day)/1000;
        fs.utimes(fpath, time, time, (err)=> {
            if (err) throw err;
        });
    });
}