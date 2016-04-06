var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function(error, contents) {
	var length = contents.split('\n').length - 1;
	console.log(length);
});
