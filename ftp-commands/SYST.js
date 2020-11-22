function handler(socket, args) {
  socket.write('215 \r\n')
}

module.exports = handler