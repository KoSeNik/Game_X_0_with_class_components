import { Component } from 'react';
import PropTypes from 'prop-types';

export class InformationLayout extends Component {
	constructor(props) {
		super();
	}

	render() {
		return <div className="text-2xl font-bold">{this.props.textInformation}</div>;
	}
}

InformationLayout.propTypes = {
	textInformation: PropTypes.string,
};
