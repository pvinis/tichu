export const Suit = {
	Jade: 0,
	Sword: 1,
	Pagoda: 2,
	Star: 3,
}

export const CardName = {
	Two: 2,
	Three: 3,
	Four: 4,
	Five: 5,
	Six: 6,
	Seven: 7,
	Eight: 8,
	Nine: 9,
	Ten: 10,
	Jack: 11,
	Queen: 12,
	King: 13,
	Ace: 14,
}

export const SpecialCard = {
	Mahjong: 0,
	Dog: 1,

	// all other cards

	Phoenix: 15,
	Dragon: 16,
}

// type Card = SpecialCard | { suit: Suit, name: CardName }

export const cardValue = (card) => {
	if (typeof card === 'number') {
		return card
	} else {
		return card.name
	}
}
