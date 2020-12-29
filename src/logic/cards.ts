import { assertNever } from 'assert-never'


export type Suit = 'jade'| 'sword' | 'pagoda' | 'star'

export type CardName =
| 'two'
| 'three'
| 'four'
| 'five'
| 'six'
| 'seven'
| 'eight'
| 'nine'
| 'ten'
| 'jack'
| 'queen'
| 'king'
| 'ace'

export type SpecialCard =
| 'majong'
| 'dog'
| 'phoenix'
| 'dragon'

export type NormalCard = { suit: Suit, name: CardName }
export type Card = NormalCard | SpecialCard

export const isSpecialCard = (card: Card ): card is SpecialCard => {
	return card === 'majong' || card === 'dog' || card === 'phoenix' || card === 'dragon'
}

export const isNormalCard = (card: Card): card is NormalCard => {
	return !isSpecialCard(card)
}

export const cardValue = (card: Card): number => {
	if (isNormalCard(card)) {
		switch(card.name) {
			case 'two': return 2
			case 'three': return 3
			case 'four': return 4
			case 'five': return 5
			case 'six': return 6
			case 'seven': return 7
			case 'eight': return 8
			case 'nine': return 9
			case 'ten': return 10
			case 'jack': return 11
			case 'queen': return 12
			case 'king': return 13
			case 'ace': return 14
			default: assertNever(card.name)
		}
	} else if (isSpecialCard(card)) {
		switch (card) {
			case 'majong' : return 0
			case 'dog': return 1
			case 'phoenix': return 15
			case 'dragon': return 16
			default: assertNever(card)
		}
	}

	assertNever(card)
	return -1
}
