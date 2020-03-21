const Server = require('boardgame.io/server').Server

const { __DEV__ } = require('./logic/config')
const Tichu = require('./logic/game').Tichu


const server = Server({ games: [Tichu] })
server.run(__DEV__ ? 8000 : process.env.PORT)
