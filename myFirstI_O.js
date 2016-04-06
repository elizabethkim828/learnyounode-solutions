var fs = require('fs');
var fileContents = fs.readFileSync(process.argv[2], 'utf8').split('\n');
console.log(fileContents.length-1);