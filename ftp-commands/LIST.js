const fs = require('fs')
const path = require('path')

function handler(socket, file){

    fs.readdir(__dirname, (err, file) => {
        if (err)
        console.log(err)
        else {
            console.log("\nCurrent directory filenames:")
            files.forEach(file => {
                console.log(file)
                socket.write(file)
            }
            
        })
    }

        module.exports = handler
        