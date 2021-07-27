const fs = require("fs");
const path = require("path");
const dirname=  path.join(__dirname, "files");

// to fix a list of files, we first need to read that list of files.
const files = fs.readdirSync(dirname);

// take the files dir, map over it, THEN use the async version of stat as we are going for each. 
files.map(file => {
    // define our files path.
    const fpath = path.join(dirname, file);
    
    // async stat method to get our stats.
    fs.stat(fpath, (err, stat)=> {
        if (err) throw err;

        // truncate to shorten our file path to the correct size.
        fs.truncate(filePath, stat.size/2, (err)=> {
            if(err) throw err;
        })
    })
})