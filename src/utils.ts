import assertNever from 'assert-never'

import { Card, cardValue, isNormalCard, isSpecialCard } from './core/cards'


export const assetForCard = (card: Card): string => {
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
	}

	assertNever(card)
	return ''
}
