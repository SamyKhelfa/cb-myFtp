const fs = require('fs')
const path = require('path')

function handler(socket, password) {
  const usersPath = path.join(__dirname, '..', 'database', 'users.json')
  const users = JSON.parse(fs.readFileSync(usersPath))

  let found = false
  for (let i = 0; i< users.length; i++){
    if(users[i].password === password && users[i].username === socket.username){
      found = true
    }
  }

  if (found) {
    socket.write('230 \r\n')
  } else {
    socket.write('530 Wrong password\r\n')
  }
}
  
module.exports = handler