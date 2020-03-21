import React, { useState } from 'react'
import { animated } from 'react-spring'
import produce from 'immer'

import { assetForCard } from './utils'


const Hand = ({ pid, cards }) => {

	const [selected, setSelected] = useState([])

	const toggle = (i) => {
		setSelected(produce(selected, draft => {
			const index = draft.indexOf(i)
			if (index === -1) {
				draft.push(i)
			} else {
				draft.splice(index, 1)
			}
		}))
	}

	return (
		<div style={{ opacity: 1 }}>
			<p>player {pid}</p>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				{cards.map((card, index) => (
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
