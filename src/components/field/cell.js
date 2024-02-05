import { Component } from 'react';
import PropTypes from 'prop-types';

export class Cell extends Component {
	constructor(props) {
		super();
	}

	render() {
		return (
			<div
				className={`text-8xl text-center justify-items-center border border-amber-700 ${
					this.props.winningIndex !== null &&
					this.props.winningIndex.includes(this.props.index)
						? 'text-red-700'
						: ''
				}`}
				onClick={() => {
					this.props.handleClickCell(this.props.index);
				}}
			>
				{this.props.cell}
			</div>
		);
	}
}

Cell.propTypes = {
	index: PropTypes.number,
	cell: PropTypes.string,
	handleClickCell: PropTypes.func,
	winningIndex: PropTypes.array,
};
