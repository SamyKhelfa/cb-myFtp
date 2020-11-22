const fs = require('fs')
const path = require('path')

//module.exports = function list(){

    fs.readdir(path, function(err, file) => {
        if (err)
        console.log(err)
        else {
            console.log("\nCurrent directory filenames:")
            files.forEach(file => {
                console.log(file)
            }
        })

        for (var i=0; i<file.length; i++) {
            console.log(file[i]);
        }
    });
//}

//socket.write(files[i])