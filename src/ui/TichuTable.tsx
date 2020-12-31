import { BoardProps } from 'boardgame.io/dist/types/packages/react'
import { useState } from 'react'

import { assetForCard } from '../utils'
import { GameState } from '../core/game'
import { Card } from '../core/cards'
import { BetDeclarationButtons } from './BetDeclarationButtons'
import { TradeUI } from './TradeUI'
import { Hand } from './Hand'
import { TurnButtons } from './TurnButtons'


export const TichuTable = (props: BoardProps<GameState>): JSX.Element => {
	const [selectedCards, setSelectedCards] = useState<Card[]>([])

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
				<TradeUI {...props} selectedCard={selectedCards.length === 1 ? selectedCards[0] : undefined} />
				: null
			}

			<Hand {...props} selectedCards={selectedCards} setSelectedCards={setSelectedCards} />
			{props.ctx.phase === 'mainGame' ?
				<TurnButtons {...props} />
				: null}
		</div>
	)
}
