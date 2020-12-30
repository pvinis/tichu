import { filter } from 'ramda'

import { isNormalCard, isSpecialCard, NormalCard, SpecialCard } from './cards'
import { createDeck } from './deck'


describe(createDeck, () => {
	it('has 56 cards, all the right cards', () => {
		const deck = createDeck()
		expect(deck).toHaveLength(56)

		const normals = filter(isNormalCard)(deck) as NormalCard[]
		expect(filter((c: NormalCard) => c.suit === 'jade')(normals)).toHaveLength(13)


		const specials = filter(isSpecialCard)(deck) as SpecialCard[]
		expect(specials).toHaveLength(4)
	})
})

