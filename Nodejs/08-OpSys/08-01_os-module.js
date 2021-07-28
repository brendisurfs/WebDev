const os = require("os");
const fs = require("fs");
const { spawn } = require("child_process");
const { Readable } = require("stream");

console.log("os platform: ", os.platform());

console.log("os cpu arch:", os.arch());

console.log("# of logical cpu cores", os.cpus().length);

console.log("homedir for cuser:", os.homedir());

console.log("line 1", os.EOL + "line 2" + os.EOL);

// print pwd
const pwd = spawn("pwd");
pwd.stdout.pipe(process.stdout);

// read permissions on directory

const filePermissions = fs.access("./", fs.constants.F_OK, (err) => {
  if (err) {
    console.log("cant find file");
    return err;
  } else {
    console.log("file exist");
    return fs.constants.F_OK;
  }
});

const bufToSTream = (binary) => {
  const readInstance = new Readable({
    read() {
      this.push(binary);
      this.push(null);
    },
  });
  return readInstance;
};

const stat = fs.statSync("./");

console.log(stat.mode);
// read path info
// const { HOME } = process.env;
// const cat = spawn("cat", [`${HOME}/.bashrc`]);
// cat.stdout.pipe(process.stdout);
