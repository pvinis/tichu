import { SpecialCard, Suit } from './cards'


export const assetForCard = (card) => {
	switch (card) {
	case SpecialCard.Dragon:
		return 'cards/dragon.png'
	case SpecialCard.Phoenix:
		return 'cards/phoenix.png'
	case SpecialCard.Dog:
		return 'cards/dog.png'
	case SpecialCard.Mahjong:
		return 'cards/mahjong.png'
	}

	const number = `${card.name}`.padStart(2, '0')
	const letter = {
		[Suit.Jade]: 'c',
		[Suit.Sword]: 'a',
		[Suit.Pagoda]: 'b',
		[Suit.Star]: 'd',
	}[card.suit]

	return `cards/${number}${letter}.png`
}
