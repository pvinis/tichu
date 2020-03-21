import React, { useState } from 'react'
import { animated } from 'react-spring'
import produce, { original } from 'immer'
import { orderBy } from 'lodash'

import { assetForCard } from './utils'
import { cardValue } from './cards'


const Hand = ({ pid, cards }) => {
	const [orderedCards, setOrderedCards] = useState(cards)
	const [selected, setSelected] = useState([])

	const toggle = (i) => {
		setSelected(produce(selected, draft => {
			const index = draft.indexOf(i)
			if (index === -1) {
				draft.push(i)
			} else {
				draft.splice(index, 1)
			}
			return
		}))
	}

	const orderCards = (order) => {
		setOrderedCards(produce(orderedCards, draft => {
			return orderBy(draft, [card => cardValue(card)], [order])
		}))
	}

	console.log(orderedCards)
	return (
		<div style={{ opacity: 1 }}>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<p>player {pid}</p>
				<button onClick={() => orderCards('asc')}>small - big</button>
				<button onClick={() => orderCards('desc')}>big - small</button>
			</div>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				{orderedCards.map((card, index) => (
					<animated.div key={assetForCard(card)} onClick={() => toggle(index)} style={{
						border: selected.includes(index) && '3px solid blue',
					}}>
						<img src={assetForCard(card)} />
					</animated.div>
				))}
			</div>
		</div>
	)
}

export const TichuTable = (props) => {
	return (
		<div>
			<div>
				<p>table</p>
				{props.G.table.cards.map(c => (
					<img src={assetForCard(c)} />
				))}
			</div>
			<Hand pid='0' cards={props.G.players[0].cards} />
		</div>
	)
}
