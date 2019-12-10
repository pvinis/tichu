
import { Client } from 'boardgame.io/react';
import {TicTacToeBoard} from './TicTacToeBoard';

const isVictory = (cells) =>
{
	return cells[0] === '0'
  }

  const isDraw = (cells) => {
	return cells.filter(c => c === null).length == 0;
  }


  const TicTacToe = {
	setup: () => ({ cells: Array(9).fill(null) }),

	moves: {
	  clickCell: (G, ctx, id) => {
		if (G.cells[id] === null) {
		  G.cells[id] = ctx.currentPlayer;
		}
	  },
	},

	endIf: (G, ctx) => {
	  if (isVictory(G.cells)) {
		return { winner: ctx.currentPlayer };
	  }
	  if (isDraw(G.cells)) {
		return { draw: true };
	  }
	},
  };

export const App = Client({
	game: TicTacToe,
	board: TicTacToeBoard,
});
