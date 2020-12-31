import { BoardProps } from 'boardgame.io/dist/types/packages/react'
import { produce } from 'immer'
import { orderBy } from 'lodash'
import { useState } from 'react'
import { animated } from 'react-spring'

import { cardValue } from '../core/cards'
import { GameState } from '../core/game'
import { assetForCard } from '../utils'


export const Hand = (props: BoardProps<GameState>): JSX.Element => {
	const cards = props.G.players[props.playerID!].cards
	const myPlayerID = props.playerID!
	const currentTurnPlayerID = props.ctx.currentPlayer
	// playerState={props.G.players[props.playerID]}
	// pass={props.moves.pass}

	const [orderedCards, setOrderedCards] = useState(cards)
	const [selected, setSelected] = useState<number[]>([])

	const toggle = (i: number) => {
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

	const orderCards = (order: 'asc' |'desc') => {
		setOrderedCards(produce(orderedCards, draft => {
			return orderBy(draft, [card => cardValue(card)], [order])
		}))
	}

	const myTurn = currentTurnPlayerID === myPlayerID
	const highlight = props.ctx.phase === 'betDeclaration' || myTurn
	return (
		<div style={{ opacity: highlight ? 1 : 0.3 }}>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				{/* <p>{name}</p> */}
				<button onClick={() => orderCards('asc')}>small - big</button>
				<button onClick={() => orderCards('desc')}>big - small</button>
				{/* <button onClick={() => pass()}>PASS</button> */}
				{props.ctx.phase === 'mainGame' ?
					<button onClick={() => orderCards('desc')}>PLAY CARDS</button>
					: null}
			</div>
			<div style={{ display: 'flex', flexDirection: 'row', height: 200, alignItems: 'flex-end' }}>
				{orderedCards.map((card, index) => (
					<animated.div
						key={assetForCard(card)}
						onClick={() => toggle(index)}
						style={{
							marginRight: -50,
							marginBottom: selected.includes(index) ? 20 : undefined,
							border: selected.includes(index) ? '2px solid blue' : '2px solid black',
						}}
					>
						<img src={assetForCard(card)} style={{ display: 'block' }} />
					</animated.div>
				))}
			</div>
		</div>
	)
}
