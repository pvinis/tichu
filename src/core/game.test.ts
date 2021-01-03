import { Ctx } from 'boardgame.io'
import { Client } from 'boardgame.io/client'
import { Local } from 'boardgame.io/multiplayer'
import { map, sample } from 'lodash'

import { dealFirst8Cards, dealRestCards, give, initGameState, Tichu } from './game'


const mockCtx = (): Ctx => ({
	numPlayers: 4,
	playOrder: ['0', '1', '2', '3'],
	playOrderPos: 0,
	activePlayers: null,
	currentPlayer: '0',
	turn: 0,
	phase: 'what',
})

describe('deal phase', () => {
	it('deals 8 cards', () => {
		const G = initGameState()
		const ctx = mockCtx()

		expect(map(G.players, p => p.cards.length)).toStrictEqual([0, 0, 0, 0])
		dealFirst8Cards(G, ctx)
		expect(map(G.players, p => p.cards.length)).toStrictEqual([8, 8, 8, 8])
	})
})


describe('trade phase', () => {
	it('gives', () => {
		const G = initGameState()
		const ctx = mockCtx()
		ctx.playerID = '1'
		dealFirst8Cards(G, ctx)
		dealRestCards(G, ctx)

		expect(Object.keys(G.trades)).toHaveLength(0)
		expect(G.players[ctx.playerID!].cards).toHaveLength(14)

		give(G, ctx, 'right', sample(G.players[ctx.playerID!].cards)!)

		expect(Object.keys(G.trades)).toHaveLength(1)
		expect(Object.keys(G.trades)).toStrictEqual(['1-0'])
		expect(G.players[ctx.playerID!].cards).toHaveLength(13)
	})
})

describe('senario', () => {
	it('should do something?', () => {
		const TichuCustomScenario = {
			...Tichu,
			//setup:
		}
		const client = Client({ game: TichuCustomScenario })

		const { G, ctx } = client.store.getState()

		expect(Object.keys(G.players)).toHaveLength(4)
		expect(ctx.gameover).toBe(undefined)
	})
})

describe('multiplayer', () => {
	it('should do something also?', () => {
		const spec = {
			game: Tichu,
			multiplayer: Local(),
		}
		const alice = Client({ ...spec, playerID: '0' })
		const beth = Client({ ...spec, playerID: '1' })
		const chloe = Client({ ...spec, playerID: '2' })
		const dana = Client({ ...spec, playerID: '3' })

		alice.start()
		beth.start()
		chloe.start()
		dana.start()

		alice.moves.declareGrandTichu()

		expect(alice.getState()?.G.players['0'].betDeclaration).toBe('grand-tichu')

		// dana.moves.declareNothing()

		// expect(alice.getState()).toBe(4)
	})
})
