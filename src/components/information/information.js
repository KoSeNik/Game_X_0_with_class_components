import PropTypes from 'prop-types';
import { InformationLayout } from './informationLayout';
import { Component } from 'react';
import { connect } from 'react-redux';

class InformationContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			textInformation: '',
		};
		this.applyTextInformation = this.applyTextInformation.bind(this);
	}

	applyTextInformation() {
		if (this.props.isDraw === true) {
			this.setState({ textInformation: 'Ничья' });
		} else if (this.props.isGameEnded === true) {
			this.setState({ textInformation: `Победа: ${this.props.currentPlayer}` });
		} else {
			this.setState({ textInformation: `Ходит ${this.props.currentPlayer}` });
		}
	}

	componentDidMount() {
		this.applyTextInformation();
		window.addEventListener('click', this.applyTextInformation);
	}
	componentWillUnmount() {
		window.removeEventListener('click', this.applyTextInformation);
	}
	render() {
		return <InformationLayout textInformation={this.state.textInformation} />;
	}
}

InformationContainer.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};

const mapStateToProps = (state) => ({
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
	isDraw: state.isDraw,
});

export const Information = connect(mapStateToProps)(InformationContainer);
