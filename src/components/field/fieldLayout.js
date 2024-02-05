import PropTypes from 'prop-types';
import { Cell } from './cell';
import { Component } from 'react';
import { connect } from 'react-redux';

export class FieldLayoutContainer extends Component {
	constructor(props) {
		super();
	}

	render() {
		return (
			<div className="field">
				{this.props.field?.map((cell, index) => (
					<Cell
						key={index}
						index={index}
						cell={cell}
						handleClickCell={this.props.handleClickCell}
						winningIndex={this.props.winningIndex}
					/>
				))}
			</div>
		);
	}
}

FieldLayoutContainer.propTypes = {
	field: PropTypes.array,
	winningIndex: PropTypes.array,
	handleClickCell: PropTypes.func,
};

const mapStateToProps = (state) => ({
	field: state.field,
	winningIndex: state.winningIndex,
});

export const FieldLayout = connect(mapStateToProps)(FieldLayoutContainer);
