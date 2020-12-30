
import { Game } from 'boardgame.io'

import { Card } from './cards'
import { createDeck } from './deck'


type Player = {
	name: string
	color: string
	cards: Card[]
}

type GameState = {
	cells: Array<string>
}

export const Tichu: Game<GameState> = {
	name: 'Tichu',

	setup: () => {
		const deck = createDeck()

		const players: Player[] = [
			{ name: 'Alice', color: 'orange', cards: [] },
			{ name: 'Beth', color: 'lime', cards: [] },
			{ name: 'Chloe', color: 'cyan', cards: [] },
			{ name: 'Dana', color: 'purple', cards: [] },
		]

		const table = { cards: [] }

		let i = 0
		deck.forEach(card => {
			players[i].cards.push(card)
			i = (i + 1) % 4
		})

		return { players, table }
	},

	moves: {
		// pass: (G, ctx) => {
		// 	ctx.events.endTurn()
		// },
		pla: (G, ctx) => {return G.cells[0] },
		// bomb: () => {},
	},

}
