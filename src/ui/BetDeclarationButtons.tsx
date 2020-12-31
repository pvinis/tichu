import { BoardProps } from 'boardgame.io/dist/types/packages/react'
import { filter, map } from 'lodash'

import { GameState, Player } from '../core/game'


export const BetDeclarationButtons = (props: BoardProps<GameState>): JSX.Element => {
	return (
		<div>
			<button
				disabled={props.G.players[props.playerID!].betDeclaration !== null}
				onClick={() => props.moves.declareNothing()}
			>no bet</button>
			<button
				disabled={props.G.players[props.playerID!].betDeclaration !== null}
				onClick={() => props.moves.declareTichu()}
			>say tichu</button>
			<button
				disabled={props.G.players[props.playerID!].betDeclaration !== null}
				onClick={() => props.moves.declareGrandTichu()}
			>say GRAND tichu</button>
			<p>Waiting for {map(filter(props.G.players, p => p.betDeclaration === null), p => p.name).join(', ')}</p>
		</div>
	)
}
