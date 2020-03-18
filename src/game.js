const isVictory = (cells: any[]) => {
	return cells[0] === '0'
}

const isDraw = (cells: any[]) => {
	return cells.filter(c => c === null).length == 0
}


export const TicTacToe = {
	setup: () => ({ cells: Array(9).fill(null) }),

	moves: {
		clickCell: (G: any, ctx: any, id: any) => {
			if (G.cells[id] === null) {
				G.cells[id] = ctx.currentPlayer
			}
		},
	},

	endIf: (G: any, ctx: any) => {
		if (isVictory(G.cells)) {
			return { winner: ctx.currentPlayer }
		}
		if (isDraw(G.cells)) {
			return { draw: true }
		}
	},
}
