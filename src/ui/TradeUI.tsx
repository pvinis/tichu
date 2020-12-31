import { BoardProps } from 'boardgame.io/dist/types/packages/react'

import { Card } from '../core/cards'
import { GameState } from '../core/game'
import { assetForCard, playerIdAcrossFrom, playerIdLeftOf, playerIdRightOf } from '../utils'


export const TradeUI = (props: BoardProps<GameState> & {
	selectedCard: Card | undefined
}): JSX.Element => {
	return (
		<div style={{ display: 'flex', flexDirection: 'row' }}>
			<div style={{ display: 'flex', width: 100, flexDirection: 'column' }}>
				<img src={assetForCard(props.G.trades[`${props.playerID!}-${playerIdLeftOf(props.playerID!)}`])} />
				<button disabled={props.selectedCard === undefined} onClick={() => {
					props.moves.give('left', props.selectedCard)
				}}>give left ({props.G.players[playerIdLeftOf(props.playerID!)].name})</button>
			</div>
			<div style={{ display: 'flex', width: 100, flexDirection: 'column' }}>
				<img src={assetForCard(props.G.trades[`${props.playerID!}-${playerIdAcrossFrom(props.playerID!)}`])} />
				<button disabled={props.selectedCard === undefined} onClick={() => {
					props.moves.give('across', props.selectedCard)
				}}>give teammate ({props.G.players[playerIdAcrossFrom(props.playerID!)].name})</button>
			</div>
			<div style={{ display: 'flex', width: 100, flexDirection: 'column' }}>
				<img src={assetForCard(props.G.trades[`${props.playerID!}-${playerIdRightOf(props.playerID!)}`])} />
				<button disabled={props.selectedCard === undefined} onClick={() => {
					props.moves.give('right', props.selectedCard)
				}}>give right ({props.G.players[playerIdRightOf(props.playerID!)].name})</button>
			</div>
			<button onClick={() => console.log()}>LOCK</button>
		</div>
	)
}
