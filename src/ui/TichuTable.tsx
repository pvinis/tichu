import { Props, useState } from 'react'
import { animated } from 'react-spring'
import produce from 'immer'
import { orderBy } from 'lodash'
import { PartialGameState } from 'boardgame.io'
import { BoardProps } from 'boardgame.io/dist/types/packages/react'

import { assetForCard } from '../utils'
import { Card, cardValue } from '../core/cards'


//d, playerState: { name, color, cards },  pass }:
const Hand = (props: {myPlayerID: string, currentTurnPlayerID: string,
cards: Card[]}): JSX.Element => {
	const [orderedCards, setOrderedCards] = useState(props.cards)
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

	const myTurn = props.currentTurnPlayerID === props.myPlayerID
	return (
		<div style={{ opacity: myTurn ? 1 : 0.3 }}>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				{/* <p>{name}</p> */}
				<button onClick={() => orderCards('asc')}>small - big</button>
				<button onClick={() => orderCards('desc')}>big - small</button>
				{/* <button onClick={() => pass()}>PASS</button> */}
				<button onClick={() => orderCards('desc')}>PLAY CARDS</button>
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
						<img src={assetForCard(card)} />
					</animated.div>
				))}
			</div>
		</div>
	)
}

export const TichuTable = (props: BoardProps): JSX.Element => {
	return (
		<div>
			<div>
				<p>table</p>
				<p>current Player {props.ctx.currentPlayer}</p>
				{props.G.table.cards.map((c: Card) => (
					<img key={'ok'} src={assetForCard(c)} />
				))}
			</div>
			<Hand
				myPlayerID={props.playerID!}
				currentTurnPlayerID={props.ctx.currentPlayer}
				cards={props.G.players[props.playerID!].cards}
				// playerState={props.G.players[props.playerID]}
				// pass={props.moves.pass}
			/>
		</div>
	)
}
