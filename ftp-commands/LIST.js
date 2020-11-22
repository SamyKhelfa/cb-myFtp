const fs = require('fs')
const path = require('path')

//module.exports = function list(){

    fs.readdir(__dirname, (err, file) => {
        if (err)
        console.log(err)
        else {
            console.log("\nCurrent directory filenames:")
            files.forEach(file => {
                console.log(file)
            }
        })

        //for (var i=0; i<file.length; i++) {
          //  console.log(file[i]);
        //}
    //});
//}

//socket.write(file[i])