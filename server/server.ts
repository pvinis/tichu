// const Server = require('boardgame.io/server').Server

// const __DEV__ = require('../src/logic/globals').__DEV__
// const Tichu = require('../src/logic/game')


// const server = Server({ games: [Tichu] })
// server.run(__DEV__ ? 8000 : (process.env.PORT ?? 80))

import bodyParser from 'body-parser'
import express from 'express'


const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())

app.get('/', () => 'ok')

app.listen(port, () => console.log(`Listening on port ${port}`))
