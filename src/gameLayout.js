import PropTypes from 'prop-types';
import { Information } from './components/information/information';
import { Field } from './components/field/field';
import { Component } from 'react';

export class GameLayout extends Component {
	constructor(props) {
		super();
	}
	render() {
		return (
			<div className="text-center text-lime-900">
				<Information />
				<Field handleClickCell={this.props.handleClickCell} />
				<button
					className="p-1 rounded border-solid border-2 border-lime-600"
					onClick={() => this.props.clickReset()}
				>
					Начать заново
				</button>
			</div>
		);
	}
}

GameLayout.propTypes = {
	handleClickCell: PropTypes.func,
	clickReset: PropTypes.func,
};
