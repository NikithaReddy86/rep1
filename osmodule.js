const os = require('os');
console.log("platform:"+os.platform());
console.log("CPU architecture:"+os.arch());
console.log("No. of CPUs:"+os.cpus().length);
console.log("Free memory:"+os.freemem());
console.log("Total memory:"+os.totalmem());
console.log("User info:",os.userInfo());
console.log("Network interfaces:",os.networkInterfaces());
