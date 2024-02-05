import { GameLayout } from './gameLayout';
import { connect } from 'react-redux';
import {
	setPlayer,
	setIsGameEnded,
	setIsDraw,
	setField,
	setWinningIndex,
	resetGame,
} from './store/actions';
import { Component } from 'react';

class GameContainer extends Component {
	constructor() {
		super();
		this.handleClickCell = this.handleClickCell.bind(this);
		this.checkDraw = this.checkDraw.bind(this);
		this.checkWinner = this.checkWinner.bind(this);
		this.clickReset = this.clickReset.bind(this);
	}

	handleClickCell(index) {
		if (this.props.field[index] === '' && this.props.isGameEnded === false) {
			const nextField = this.props.field.slice();
			nextField[index] = this.props.currentPlayer;
			this.props.dispatch(setField(nextField));
			this.checkDraw(nextField);
			this.props.dispatch(setPlayer(this.props.currentPlayer === 'X' ? 'O' : 'X'));
			this.checkWinner(nextField);
		}
	}

	checkDraw(field) {
		if (!field.includes('') && this.props.isGameEnded !== true)
			this.props.dispatch(setIsDraw(true));
	}

	checkWinner(field) {
		const WIN_PATTERNS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8], // Варианты побед по горизонтали
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8], // Варианты побед по вертикали
			[0, 4, 8],
			[2, 4, 6], // Варианты побед по диагонали
		];
		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [a, b, c] = WIN_PATTERNS[i];
			if (field[a] && field[a] === field[b] && field[a] === field[c]) {
				this.props.dispatch(setIsGameEnded(true));
				this.props.dispatch(setPlayer(this.props.currentPlayer));
				this.props.dispatch(setIsDraw(false));
				this.props.dispatch(setWinningIndex(WIN_PATTERNS[i]));
			}
		}
	}

	clickReset() {
		this.props.dispatch(resetGame);
	}

	render() {
		return (
			<GameLayout
				handleClickCell={this.handleClickCell}
				clickReset={this.clickReset}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
	isDraw: state.isDraw,
	field: state.field,
	winningIndex: state.winningIndex,
});

export const Game = connect(mapStateToProps)(GameContainer);
