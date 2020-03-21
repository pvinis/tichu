import React, { useState } from 'react'
import { animated } from 'react-spring'
import produce, { original } from 'immer'
import { orderBy } from 'lodash'

import { assetForCard } from '../logic/utils'
import { cardValue } from '../logic/cards'


const Hand = ({ pid, playerState: { name, color, cards }, myTurn, pass }) => {
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

	return (
		<div style={{ opacity: 1, opacity: myTurn ? 1 : 0.3 }}>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<p>{name}</p>
				<button onClick={() => orderCards('asc')}>small - big</button>
				<button onClick={() => orderCards('desc')}>big - small</button>
				<button onClick={() => pass()}>PASS</button>
				<button onClick={() => orderCards('desc')}>PLAY CARDS</button>
			</div>
			<div style={{ display: 'flex', flexDirection: 'row', height: 200, alignItems: 'flex-end' }}>
				{orderedCards.map((card, index) => (
					<animated.div key={assetForCard(card)} onClick={() => toggle(index)} style={{
						marginRight: -50,
						marginBottom: selected.includes(index) && 20,
						border: selected.includes(index) ? '2px solid blue' : '2px solid black',
					}}>
						<img src={assetForCard(card)} />
					</animated.div>
				))}
			</div>
		</div>
	)
}

export const TichuTable = (props) => {
	console.log(props)
	return (
		<div>
			<div>
				<p>table</p>
				<p>current Player {props.ctx.currentPlayer}</p>
				{props.G.table.cards.map(c => (
					<img src={assetForCard(c)} />
				))}
			</div>
			<Hand pid={props.playerID} cards={props.G.players[0].cards}
				myTurn={props.ctx.currentPlayer === props.playerID}
				playerState={props.G.players[props.playerID]}
				pass={props.moves.pass}
			/>
		</div>
	)
}
