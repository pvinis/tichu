
import React, { useState } from 'react'
import { Client } from 'boardgame.io/react'
import { Local } from 'boardgame.io/multiplayer'

import { TichuTable } from './TichuTable'
import { Tichu } from './game'


const TichuClient = Client({
	game: Tichu,
	numPlayers: 4,
	board: TichuTable,
	multiplayer: Local(),
})

export const App = () => {
	const [id, setId] = useState(0)

	return (
		<div>
			<button onClick={() => setId(0)}>Be Player 0</button>
			<button onClick={() => setId(1)}>Be Player 1</button>
			<button onClick={() => setId(2)}>Be Player 2</button>
			<button onClick={() => setId(3)}>Be Player 3</button>
			{id === 0 && <TichuClient playerID='0' />}
			{id === 1 && <TichuClient playerID='1' />}
			{id === 2 && <TichuClient playerID='2' />}
			{id === 3 && <TichuClient playerID='3' />}
		</div>
	)}
