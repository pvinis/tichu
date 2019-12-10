
import React from 'react';
import { Client } from 'boardgame.io/react';
import {TicTacToeBoard} from './TicTacToeBoard';
import { Local } from 'boardgame.io/multiplayer';
import { TicTacToe } from './game';


const TicTacToeClient = Client({
	game: TicTacToe,
	board: TicTacToeBoard,
	multiplayer: Local(),
});

export const App = () => (
	<div>
<TicTacToeClient playerID='0' />
<TicTacToeClient playerID='1' />
	</div>
)
