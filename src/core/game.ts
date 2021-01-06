
import assertNever from 'assert-never'
import { Ctx, Game, Move, PhaseConfig } from 'boardgame.io'
import { TurnOrder } from 'boardgame.io/core'
import { drop, map, pull, range, remove, take, without } from 'lodash'

import { playerIdAcrossFrom, playerIdLeftOf, playerIdRightOf } from '../utils'
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
	trades: { [idToId: string]: Card}
}

export const initPlayers = () => {
	const players: {[id: string]: Player} = {
		'0': { name: 'Alice', color: 'orange', cards: [], betDeclaration: null },
		'1': { name: 'Beth', color: 'lime', cards: [], betDeclaration: null },
		'2': { name: 'Chloe', color: 'cyan', cards: [], betDeclaration: null },
		'3': { name: 'Dana', color: 'purple', cards: [], betDeclaration: null },
	}
	return players
}

export const initGameState = () => {
	const deck = createDeck()

	const players = initPlayers()

	const table = { cards: [] }
	const trades = {}

	return { players, table, deck, trades }
}

export const dealFirst8Cards = (G: GameState, ctx: Ctx) => {
	range(8 * 4).map(i => {
		G.players[i % 4].cards.push(G.deck.shift()!)
	})
}

export const dealRestCards = (G: GameState, ctx: Ctx) => {
	range(6 * 4).map(i => {
		G.players[i % 4].cards.push(G.deck.shift()!)
	})
}

export const allPlayersHaveDeclaredBets = (G: GameState, ctx: Ctx): boolean => {
	return !map(G.players, player => player.betDeclaration !== null).includes(false)
}


export const give = (G: GameState, ctx: Ctx, who: 'left'|'right'|'across', card: Card): GameState => {
	const fn = (() => {
		switch(who) {
			case 'left': return playerIdLeftOf
			case 'across': return playerIdAcrossFrom
			case 'right': return playerIdRightOf
			default: assertNever(who)
		}
	})()
	const key = `${ctx.playerID!}-${fn(ctx.playerID!)}`

	if (G.trades[key] !== undefined) {
		G.players[ctx.playerID!].cards.push(G.trades[key])
	}
	pull(G.players[ctx.playerID!].cards, card)
	G.trades[key] = card

	return G
}


export const Tichu: Game<GameState> = {
	name: 'Tichu',

	setup: (): GameState => {
		return initGameState()
	},

	phases: {
		betDeclaration: {
			start: true,
			turn: {
				activePlayers: {
					all: 'betDeclaration',
				},
			},
			onBegin: dealFirst8Cards,
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
			endIf: allPlayersHaveDeclaredBets,
			onEnd: dealRestCards,
			next: 'trade',
		},

		trade: {
			turn: {
				activePlayers: {
					all: 'trade',
				},
			},
			moves: {
				give,
				lock: () => {},
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
