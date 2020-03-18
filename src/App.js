
import React, { useState } from 'react'
import { Client } from 'boardgame.io/react'
import { SocketIO } from 'boardgame.io/multiplayer'

import { TicTacToeBoard } from './TicTacToeBoard'
import { TicTacToe } from './game'


const TicTacToeClient = Client({
	game: TicTacToe,
	board: TicTacToeBoard,
	multiplayer: SocketIO({ server: 'localhost:8000' }),
})

export const App = () => {
	const [id, setId] = useState(undefined)

	return (
		<div>
			<button onClick={() => setId(0)}>Be Player 0</button>
			<button onClick={() => setId(1)}>Be Player 1</button>
			{id === 0 && <TicTacToeClient playerID='0' />}
			{id === 1 && <TicTacToeClient playerID='1' />}
		</div>
	)}
