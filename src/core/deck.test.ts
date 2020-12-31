import { filter } from 'lodash'

import { isNormalCard, isSpecialCard } from './cards'
import { createDeck } from './deck'


describe(createDeck, () => {
	it('has 56 cards, all the right cards', () => {
		const deck = createDeck()
		expect(deck).toHaveLength(56)

		const normals = filter(deck, isNormalCard)
		expect(filter(normals, c => c.suit === 'jade')).toHaveLength(13)


		const specials = filter(deck, isSpecialCard)
		expect(specials).toHaveLength(4)
	})
})

