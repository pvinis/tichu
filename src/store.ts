import { clone } from 'lodash'
import { BehaviorSubject } from 'rxjs'

import { Card } from './core/cards'


export const store = {
	hand: {
		selectedCards$: new BehaviorSubject<Card[]>([]),

		toggleCard: (card: Card) => {
			const cards = store.hand.selectedCards$.value
			const nextCards = clone(cards)
			if (cards.includes(card)) {
				const i = cards.indexOf(card)
				nextCards.splice(i, 1)
			} else {
				nextCards.push(card)
			}
			store.hand.selectedCards$.next(nextCards)
		},
		deselectAllCards: () => {
			store.hand.selectedCards$.next([])
		},
	},
}

