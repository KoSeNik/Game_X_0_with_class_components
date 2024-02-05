import PropTypes from 'prop-types';
import { FieldLayout } from './fieldLayout';
import { Component } from 'react';

export class Field extends Component {
	constructor(props) {
		super();
	}

	render() {
		return <FieldLayout handleClickCell={this.props.handleClickCell} />;
	}
}

Field.propTypes = {
	handleClickCell: PropTypes.func,
};
