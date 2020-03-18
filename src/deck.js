import shuffle from 'shuffle-array'

import { SpecialCard, Suit, CardName } from './cards'


export const createDeck = () => {
	const deck = [
		SpecialCard.Dragon,
		SpecialCard.Phoenix,
		SpecialCard.Dog,
		SpecialCard.Mahjong,

		{ suit: Suit.Jade, name: CardName.Two },
		{ suit: Suit.Jade, name: CardName.Three },
		{ suit: Suit.Jade, name: CardName.Four },
		{ suit: Suit.Jade, name: CardName.Five },
		{ suit: Suit.Jade, name: CardName.Six },
		{ suit: Suit.Jade, name: CardName.Seven },
		{ suit: Suit.Jade, name: CardName.Eight },
		{ suit: Suit.Jade, name: CardName.Nine },
		{ suit: Suit.Jade, name: CardName.Ten },
		{ suit: Suit.Jade, name: CardName.Jack },
		{ suit: Suit.Jade, name: CardName.Queen },
		{ suit: Suit.Jade, name: CardName.King },
		{ suit: Suit.Jade, name: CardName.Ace },

		{ suit: Suit.Sword, name: CardName.Two },
		{ suit: Suit.Sword, name: CardName.Three },
		{ suit: Suit.Sword, name: CardName.Four },
		{ suit: Suit.Sword, name: CardName.Five },
		{ suit: Suit.Sword, name: CardName.Six },
		{ suit: Suit.Sword, name: CardName.Seven },
		{ suit: Suit.Sword, name: CardName.Eight },
		{ suit: Suit.Sword, name: CardName.Nine },
		{ suit: Suit.Sword, name: CardName.Ten },
		{ suit: Suit.Sword, name: CardName.Jack },
		{ suit: Suit.Sword, name: CardName.Queen },
		{ suit: Suit.Sword, name: CardName.King },
		{ suit: Suit.Sword, name: CardName.Ace },

		{ suit: Suit.Pagoda, name: CardName.Two },
		{ suit: Suit.Pagoda, name: CardName.Three },
		{ suit: Suit.Pagoda, name: CardName.Four },
		{ suit: Suit.Pagoda, name: CardName.Five },
		{ suit: Suit.Pagoda, name: CardName.Six },
		{ suit: Suit.Pagoda, name: CardName.Seven },
		{ suit: Suit.Pagoda, name: CardName.Eight },
		{ suit: Suit.Pagoda, name: CardName.Nine },
		{ suit: Suit.Pagoda, name: CardName.Ten },
		{ suit: Suit.Pagoda, name: CardName.Jack },
		{ suit: Suit.Pagoda, name: CardName.Queen },
		{ suit: Suit.Pagoda, name: CardName.King },
		{ suit: Suit.Pagoda, name: CardName.Ace },

		{ suit: Suit.Star, name: CardName.Two },
		{ suit: Suit.Star, name: CardName.Three },
		{ suit: Suit.Star, name: CardName.Four },
		{ suit: Suit.Star, name: CardName.Five },
		{ suit: Suit.Star, name: CardName.Six },
		{ suit: Suit.Star, name: CardName.Seven },
		{ suit: Suit.Star, name: CardName.Eight },
		{ suit: Suit.Star, name: CardName.Nine },
		{ suit: Suit.Star, name: CardName.Ten },
		{ suit: Suit.Star, name: CardName.Jack },
		{ suit: Suit.Star, name: CardName.Queen },
		{ suit: Suit.Star, name: CardName.King },
		{ suit: Suit.Star, name: CardName.Ace },
	]
	return shuffle(deck)
}
