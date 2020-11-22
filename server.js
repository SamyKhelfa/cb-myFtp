const net = require('net')

// Import ftp-commands handler
const userHandler = require('./ftp-commands/USER')
const passwordHandler = require('./ftp-commands/PASS')
const systHandler = require('./ftp-commands/SYST')
const listHandler = require('./ftp-commands/LIST')

/**
 * Socket Listeners
 */
function onData(data) {
  const request = data     // Buffer < 0x00 ... >
    .toString()            // USER Samy\r\n
    .replace('\r\n', '')   // USER Samy

  console.log('FileZilla >>', request)

  const [command, args] = request.split(' ') // ['USER', 'Samy']

  // Command Handler
  switch(command) {
    case 'USER':
      userHandler(this, args)
      break
    case 'SYST':
      systHandler(this, args)
      break
    case 'PASS':
      passwordHandler(this, args)
      break
    case 'LIST':
      listHandler(this, args)
    default:
      console.log(`Unknown command: ${command}`)
      break
  }
}

/**
 * Server Listeners
 */
function onConnection(socket) {
  // Send FTP Hello Message
  socket.write('200 Hello World!\r\n')

  // Initialize Socket Listeners
  socket.on('data', onData)
}

// Parse node.js server <PORT>
const PORT = process.argv[2]

// Create TCP Server
const server = net.createServer(onConnection)

// Listen on localhost::PORT
server.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
})
