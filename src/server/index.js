import { Server } from 'boardgame.io/server'

import { __DEV__ } from '../globals'
import { Tichu } from '../core/game'


const server = Server({ games: [Tichu] })
console.log('Starting server..')
server.run(__DEV__ ? 8000 : (process.env.PORT || 80))
