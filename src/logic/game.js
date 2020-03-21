
import { createDeck } from './deck'


const isVictory = (cells) => {
	return cells[0] === '0'
}

const isDraw = (cells) => {
	return cells.filter(c => c === null).length === 0
}


export const TicTacToe = {
	setup: () => ({ cells: Array(9).fill(null) }),

	moves: {
		clickCell: (G, ctx, id) => {
			if (G.cells[id] === null) {
				G.cells[id] = ctx.currentPlayer
			}
		},
	},

	endIf: (G, ctx) => {
		if (isVictory(G.cells)) {
			return { winner: ctx.currentPlayer }
		}
		if (isDraw(G.cells)) {
			return { draw: true }
		}
	},
}


export const Tichu = {
	name: 'Tichu',
	setup: (ctx, setupData) => {
		const deck = createDeck()

		const players = [
			{ name: '0', cards: [] },
			{ name: '1', cards: [] },
			{ name: '2', cards: [] },
			{ name: '3', cards: [] },
		]

		const table = { cards: [] }

		let i = 0
		deck.forEach(card => {
			players[i].cards.push(card)
			i = (i+1) % 4
		})

		return { players, table }
	},

	moves: {
		pass: (G, ctx) => {
			ctx.events.endTurn()
		},
		play: (G, ctx) => {},
		bomb: (G, ctx) => {},
	},

}
