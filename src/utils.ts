import assertNever from 'assert-never'

import { Card, cardValue, isNormalCard, isSpecialCard } from './core/cards'


export const assetForCard = (card: Card | undefined): string => {
	if (isSpecialCard(card)) {
		switch (card) {
			case 'majong': return 'cards/mahjong.png'
			case 'dog': return 'cards/dog.png'
			case 'phoenix': return 'cards/phoenix.png'
			case 'dragon': return 'cards/dragon.png'
			default: assertNever(card)
		}
	} else if (isNormalCard(card)) {
		const number = `${cardValue(card)}`.padStart(2, '0')
		const letter = {
			'jade': 'c',
			'sword': 'a',
			'pagoda': 'b',
			'star': 'd',
		}[card.suit]

		return `cards/${number}${letter}.png`
	} else if (card === undefined) {
		return 'cards/back.jpg'
	}

	assertNever(card)
	return ''
}

export type PlayerId = string
// export type PlayerId = '0'| '1'|'2'|'3'
// players sitting like:
//   0
// 3  1
//  2
export const playerIdLeftOf = (playerId: PlayerId): PlayerId => {
	const id = parseInt(playerId)
	return `${(id + 1) % 4}` as PlayerId
}

export const playerIdAcrossFrom = (playerId: PlayerId): PlayerId => {
	const id = parseInt(playerId)
	return `${(id + 2) % 4}` as PlayerId
}

export const playerIdRightOf = (playerId: PlayerId): PlayerId => {
	const id = parseInt(playerId)
	return `${(id + 3) % 4}` as PlayerId
}
