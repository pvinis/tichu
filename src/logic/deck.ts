import shuffle from 'shuffle-array'

import { Card } from './cards'


export const createDeck = (): Card[] => {
	const deck: Card[] = [
		'majong',
		'dog',
		'phoenix',
		'dragon',

		{ suit: 'jade', name: 'two' },
		{ suit: 'jade', name: 'three' },
		{ suit: 'jade', name: 'four' },
		{ suit: 'jade', name: 'five' },
		{ suit: 'jade', name: 'six' },
		{ suit: 'jade', name: 'seven' },
		{ suit: 'jade', name: 'eight' },
		{ suit: 'jade', name: 'nine' },
		{ suit: 'jade', name: 'ten' },
		{ suit: 'jade', name: 'jack' },
		{ suit: 'jade', name: 'queen' },
		{ suit: 'jade', name: 'king' },
		{ suit: 'jade', name: 'ace' },

		{ suit: 'sword', name: 'two' },
		{ suit: 'sword', name: 'three' },
		{ suit: 'sword', name: 'four' },
		{ suit: 'sword', name: 'five' },
		{ suit: 'sword', name: 'six' },
		{ suit: 'sword', name: 'seven' },
		{ suit: 'sword', name: 'eight' },
		{ suit: 'sword', name: 'nine' },
		{ suit: 'sword', name: 'ten' },
		{ suit: 'sword', name: 'jack' },
		{ suit: 'sword', name: 'queen' },
		{ suit: 'sword', name: 'king' },
		{ suit: 'sword', name: 'ace' },

		{ suit: 'pagoda', name: 'two' },
		{ suit: 'pagoda', name: 'three' },
		{ suit: 'pagoda', name: 'four' },
		{ suit: 'pagoda', name: 'five' },
		{ suit: 'pagoda', name: 'six' },
		{ suit: 'pagoda', name: 'seven' },
		{ suit: 'pagoda', name: 'eight' },
		{ suit: 'pagoda', name: 'nine' },
		{ suit: 'pagoda', name: 'ten' },
		{ suit: 'pagoda', name: 'jack' },
		{ suit: 'pagoda', name: 'queen' },
		{ suit: 'pagoda', name: 'king' },
		{ suit: 'pagoda', name: 'ace' },

		{ suit: 'star', name: 'two' },
		{ suit: 'star', name: 'three' },
		{ suit: 'star', name: 'four' },
		{ suit: 'star', name: 'five' },
		{ suit: 'star', name: 'six' },
		{ suit: 'star', name: 'seven' },
		{ suit: 'star', name: 'eight' },
		{ suit: 'star', name: 'nine' },
		{ suit: 'star', name: 'ten' },
		{ suit: 'star', name: 'jack' },
		{ suit: 'star', name: 'queen' },
		{ suit: 'star', name: 'king' },
		{ suit: 'star', name: 'ace' },
	]

	return shuffle(deck)
}
