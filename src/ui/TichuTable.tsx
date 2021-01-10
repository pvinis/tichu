import { BoardProps } from 'boardgame.io/dist/types/packages/react'

import { assetForCard } from '../utils'
import { GameState } from '../core/game'
import { Card } from '../core/cards'
import { BetDeclarationButtons } from './BetDeclarationButtons'
import { TradeUI } from './TradeUI'
import { Hand } from './Hand'
import { TurnButtons } from './TurnButtons'


export const TichuTable = (props: BoardProps<GameState>): JSX.Element => {
	return (
		<div>
			<div>
				<p>==== {props.G.players[props.playerID!].name}</p>
				{props.G.table.cards.map((c: Card) => (
					<img key={'ok'} src={assetForCard(c)} />
				))}
			</div>

			{props.ctx.phase === 'betDeclaration' ?
				<BetDeclarationButtons {...props} />
				: null
			}
			{props.ctx.phase === 'trade' ?
				<TradeUI {...props} />
				: null
			}

			<Hand {...props} />
			{props.ctx.phase === 'mainGame' ?
				<TurnButtons {...props} />
				: null}
		</div>
	)
}
