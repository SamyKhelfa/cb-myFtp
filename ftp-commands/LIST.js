const fs = require('fs')
const path = require('path')

fs.readdir(path, function(err, files) {
    console.log(files);

    for (var i=0; i<files.length; i++) {
        console.log(files[i]);
    }
});

console.log