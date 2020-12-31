
import { Game } from 'boardgame.io'
import { TurnOrder } from 'boardgame.io/core'
import { map, take } from 'lodash'

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
	deck: Card[]
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

		return { players, table, deck }
	},

	phases: {
		betDeclaration: {
			start: true,
			turn: {
				activePlayers: {
					all: 'betDeclaration',
				},
			},
			onBegin: (G, ctx) => {
				let i = 0
				take(G.deck, 8 * 4).forEach(card => {
					G.players[i].cards.push(card)
					i = (i + 1) % 4
				})
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
			next: 'mainGame',
		},

		mainGame: {
			// onBegin: (G,ctx) => {
			// ctx.events?.setActivePlayers({
			// current:
			// })
			// }
			turn: { order: TurnOrder.RESET },
			moves: {
				pass: (G, ctx) => {
					ctx.events!.endTurn!()
				},
				// 	pla: (G, ctx) => {},
				bomb: () => {},
			},

		},
	},
}
