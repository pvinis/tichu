import { playerIdAcrossFrom, playerIdLeftOf, playerIdRightOf } from './utils'


describe(playerIdLeftOf, () => {
	it('works correctly', () => {
		expect(playerIdLeftOf('0')).toBe('1')
		expect(playerIdLeftOf('1')).toBe('2')
		expect(playerIdLeftOf('2')).toBe('3')
		expect(playerIdLeftOf('3')).toBe('0')
	})
})

describe(playerIdAcrossFrom, () => {
	it('works correctly', () => {
		expect(playerIdAcrossFrom('0')).toBe('2')
		expect(playerIdAcrossFrom('1')).toBe('3')
		expect(playerIdAcrossFrom('2')).toBe('0')
		expect(playerIdAcrossFrom('3')).toBe('1')
	})
})


describe(playerIdRightOf, () => {
	it('works correctly', () => {
		expect(playerIdRightOf('0')).toBe('3')
		expect(playerIdRightOf('1')).toBe('0')
		expect(playerIdRightOf('2')).toBe('1')
		expect(playerIdRightOf('3')).toBe('2')
	})
})
