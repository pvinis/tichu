import React from 'react'

import { assetForCard } from './utils'


const Bla = (props) => {
	return (
		<div style={{ opacity: props.for === props.playerID ? 1 : 0.3 }}>
			<p>player {props.for}</p>
			{props.G.players[props.for].cards.map(c => (
				<img src={assetForCard(c)} />
			))}
		</div>
	)
}
export const TichuTable = (props) => {

	console.log(props)
	return (
		<div>
			<Bla {...props} for='0' />
			<Bla {...props} for='1' />
			<Bla {...props} for='2' />
			<Bla {...props} for='3' />
		</div>
	)
}
