import React from 'react'
import { animated, useSprings } from 'react-spring'
import { useGesture } from 'react-with-gesture'

import { assetForCard } from './utils'


const Hand = ({ pid, cards }) => {
	const bind = useGesture(({ args: [origIndex], down, delta: [x] }) => {
		console.log('aa', down, origIndex)
	})
	return (
		<div style={{ opacity: 1 }}>
			<p>player {pid}</p>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				{cards.map((card, index) => (
					<animated.div key={assetForCard(card)} {...bind(index)}>
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
