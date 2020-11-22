const fs = require('fs')
const path = require('path')

function handler(socket, username) {
  const usersPath = path.join(__dirname, '..', 'database', 'users.json')
  const users = JSON.parse(fs.readFileSync(usersPath))

  let found = false
  for (let i = 0; i<users.length; i++){
    if(users[i].username === username){
      found = true
    }
  }

  if (found) {
    socket.username = username
    socket.write('331 \r\n')
  } else {
    socket.write('530 No user found\r\n')
  }
}

module.exports = handler