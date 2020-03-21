const Server = require('boardgame.io/server').Server

const Tichu = require('./logic/game').Tichu


const server = Server({ games: [Tichu] })
server.run(8000)
