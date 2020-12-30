
import { Game } from 'boardgame.io'
import { TurnOrder } from 'boardgame.io/dist/types/src/core/turn-order'
import { map } from 'lodash'
// import { map } from 'ramda'

import { Card } from './cards'
import { createDeck } from './deck'


export type Phases = 'betDeclaration' | 'mainGame'

export type Bet = 'none' | 'tichu' | 'grand-tichu'

export type Player = {
	name: string
	color: string
	cards: Card[]
	betDeclaration: null | Bet
}

export type Table = {
	cards: Card[]
}

export type GameState = {
	players: {[id: string]: Player}
	table: Table
}

export const Tichu: Game<GameState> = {
	name: 'Tichu',

	setup: (): GameState => {
		const deck = createDeck()

		const players: {[id: string]: Player} = {
			'0': { name: 'Alice', color: 'orange', cards: [], betDeclaration: null },
			'1': { name: 'Beth', color: 'lime', cards: [], betDeclaration: null },
			'2': { name: 'Chloe', color: 'cyan', cards: [], betDeclaration: null },
			'3': { name: 'Dana', color: 'purple', cards: [], betDeclaration: null },
		}

		const table = { cards: [] }

		// let i = 0
		// deck.forEach(card => {
		// players[i].cards.push(card)
		// i = (i + 1) % 4
		// })

		return { players, table }
	},

	phases: {
		betDeclaration: {
			start: true,
			next: 'mainGame',
			turn: {
				activePlayers: {
					all: 'betDeclaration',
				},
			},
			moves: {
				declareGrandTichu: (G, ctx) => {
					G.players[ctx.playerID!].betDeclaration = 'grand-tichu'
				},
				declareTichu: (G, ctx) => {
					G.players[ctx.playerID!].betDeclaration = 'tichu'
				},
				declareNothing: (G, ctx) => {
					G.players[ctx.playerID!].betDeclaration = 'none'
				},
				declareBet: (G, ctx, bet: Bet) => {
					G.players[ctx.playerID!].betDeclaration = bet
				},

			},
			endIf: (G, ctx) => {
				return !map(G.players, player => player.betDeclaration !== null).includes(false)
			},
		},

		mainGame: {
		// pass: (G, ctx) => {
			// 	// 	ctx.events.endTurn()
			// 	// },
			// 	pla: (G, ctx) => {},
			// 	// bomb: () => {},

		},
	},
}
