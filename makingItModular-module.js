var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {
    fs.readdir(dir, function(error, filelist) {
		if (error) {
			return callback(error);
        }

        var filteredlist = filelist.filter(function(file) {
			return path.extname(file) === '.' + ext;
        });
        
        callback(null, filteredlist);
    });
}
