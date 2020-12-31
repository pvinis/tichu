import { BoardProps } from 'boardgame.io/dist/types/packages/react'
import { produce } from 'immer'
import { filter, orderBy, pick } from 'lodash'
import { useEffect, useMemo, useState } from 'react'
import { animated } from 'react-spring'

import { Card, cardValue } from '../core/cards'
import { GameState } from '../core/game'
import { assetForCard } from '../utils'


const orderCards = (cards: Card[], order: 'asc' |'desc' | undefined) => {
	if (order === undefined) return cards

	return produce(cards, draft => {
		return orderBy(draft, [card => cardValue(card)], [order])
	})
}

export const Hand = (props: BoardProps<GameState> & {
	selectedCards: Card[],
	setSelectedCards: (cards: Card[]) => void
}): JSX.Element => {
	const myPlayerID = props.playerID!
	const currentTurnPlayerID = props.ctx.currentPlayer
	// playerState={props.G.players[props.playerID]}
	// pass={props.moves.pass}


	const [order, setOrder] = useState<'asc'|'desc'|undefined>(undefined)
	const orderedCards = useMemo(() => orderCards(props.G.players[props.playerID!].cards, order), [props.G.players[props.playerID!].cards, order])

	const [selected, setSelected] = useState<number[]>([])
	useEffect(() => {
		props.setSelectedCards(filter(orderedCards, (card, idx) => selected.includes(idx)))
	}, [selected])

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
