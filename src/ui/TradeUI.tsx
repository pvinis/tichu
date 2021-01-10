import { BoardProps } from 'boardgame.io/dist/types/packages/react'
import { useObservable } from 'rxjs-hooks'
import { map } from 'rxjs/operators'

import { GameState } from '../core/game'
import { store } from '../store'
import { assetForCard, playerIdAcrossFrom, playerIdLeftOf, playerIdRightOf } from '../utils'


export const TradeUI = (props: BoardProps<GameState>): JSX.Element => {
	const selectedCard = useObservable(() => store.hand.selectedCards$.pipe(
		map(cards => cards.length === 1 ? cards[0] : undefined),
	))
	const deselectCards = store.hand.deselectAllCards

	return (
		<div style={{ display: 'flex', flexDirection: 'row' }}>
			<div style={{ display: 'flex', width: 100, flexDirection: 'column' }}>
				<img src={assetForCard(props.G.trades[`${props.playerID!}-${playerIdLeftOf(props.playerID!)}`])} />
				<button disabled={selectedCard === undefined} onClick={() => {
					props.moves.give('left', selectedCard)
					deselectCards()
				}}>give left ({props.G.players[playerIdLeftOf(props.playerID!)].name})</button>
			</div>
			<div style={{ display: 'flex', width: 100, flexDirection: 'column' }}>
				<img src={assetForCard(props.G.trades[`${props.playerID!}-${playerIdAcrossFrom(props.playerID!)}`])} />
				<button disabled={selectedCard === undefined} onClick={() => {
					props.moves.give('across', selectedCard)
					deselectCards()
				}}>give teammate ({props.G.players[playerIdAcrossFrom(props.playerID!)].name})</button>
			</div>
			<div style={{ display: 'flex', width: 100, flexDirection: 'column' }}>
				<img src={assetForCard(props.G.trades[`${props.playerID!}-${playerIdRightOf(props.playerID!)}`])} />
				<button disabled={selectedCard === undefined} onClick={() => {
					props.moves.give('right', selectedCard)
					deselectCards()
				}}>give right ({props.G.players[playerIdRightOf(props.playerID!)].name})</button>
			</div>
			<button onClick={() => console.log()}>LOCK</button>
		</div>
	)
}
