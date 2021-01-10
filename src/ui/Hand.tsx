import { BoardProps } from 'boardgame.io/dist/types/packages/react'
import { orderBy } from 'lodash'
import { useMemo, useState } from 'react'
import { animated } from 'react-spring'
import { useObservable } from 'rxjs-hooks'

import { Card, cardValue } from '../core/cards'
import { GameState } from '../core/game'
import { store } from '../store'
import { assetForCard } from '../utils'


const orderCards = (cards: Card[], order: 'asc' |'desc' | undefined) => {
	if (order === undefined) return cards

	return orderBy(cards, [card => cardValue(card)], [order])
}

export const Hand = (props: BoardProps<GameState>): JSX.Element => {
	const selectedCards = useObservable(() => store.hand.selectedCards$, [])
	const toggle = store.hand.toggleCard

	const myPlayerID = props.playerID!
	const currentTurnPlayerID = props.ctx.currentPlayer
	// playerState={props.G.players[props.playerID]}
	// pass={props.moves.pass}


	const [order, setOrder] = useState<'asc'|'desc'|undefined>(undefined)
	const orderedCards = useMemo(() => orderCards(props.G.players[props.playerID!].cards, order), [props.G.players[props.playerID!].cards, order])

	const myTurn = currentTurnPlayerID === myPlayerID
	const highlight = props.ctx.phase !== 'mainGame' || myTurn
	return (
		<div style={{ opacity: highlight ? 1 : 0.3 }}>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				{/* <p>{name}</p> */}
				<button onClick={() => setOrder('asc')}>small - big</button>
				<button onClick={() => setOrder('desc')}>big - small</button>
			</div>
			<div style={{ display: 'flex', flexDirection: 'row', height: 200, alignItems: 'flex-end' }}>
				{orderedCards.map((card) => (
					<animated.div
						key={assetForCard(card)}
						onClick={() => toggle(card)}
						style={{
							marginRight: -50,
							marginBottom: selectedCards.includes(card) ? 20 : undefined,
							border: selectedCards.includes(card) ? '2px solid blue' : '2px solid black',
						}}
					>
						<img src={assetForCard(card)} style={{ display: 'block' }} />
					</animated.div>
				))}
			</div>
		</div>
	)
}
