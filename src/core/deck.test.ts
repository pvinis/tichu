import { createDeck } from "./deck"

describe(createDeck, () => {
	it('has 56 cards', () => {
		expect(createDeck()).toHaveLength(56)
	})
})
