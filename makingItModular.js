var module = require('./makingItModular-module.js');

module(process.argv[2], process.argv[3], function(error, list) {
	if (error) {
		return console.error('Error: ', error);
	}
	
    list.forEach(function(file) {
        console.log(file);
    });
});