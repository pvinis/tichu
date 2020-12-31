import { BoardProps } from 'boardgame.io/dist/types/packages/react'

import { GameState } from '../core/game'


export const TurnButtons = (props: BoardProps<GameState>): JSX.Element => {
	return (
		<div>
			<button onClick={() => console.log()}>PASS</button>
			<button onClick={() => console.log('desc')}>PLAY CARDS</button>
		</div>
	)
}
