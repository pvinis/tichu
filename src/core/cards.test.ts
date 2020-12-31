import { filter } from 'lodash'

import { isNormalCard, isSpecialCard } from './cards'


describe(isSpecialCard, () => {
	it('works correctly', () => {
		expect(isSpecialCard(undefined)).toBe(false)
		expect(isSpecialCard('phoenix')).toBe(true)
		expect(isSpecialCard({ suit: 'jade', name: 'ten' })).toBe(false)
	})
})

describe(isNormalCard, () => {
	it('works correctly', () => {
		expect(isNormalCard(undefined)).toBe(false)
		expect(isNormalCard('phoenix')).toBe(false)
		expect(isNormalCard({ suit: 'jade', name: 'ten' })).toBe(true)
	})
})

