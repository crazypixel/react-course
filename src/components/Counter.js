import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increaseCounter, decreaseCounter} from '../redux/actions/counter.actions';

class Counter extends Component {
	componentDidMount() {
		// .then(data => this.setState({ data })
	}
	
	render() {
		return (
			<div onClick={this.props.increaseCounter}>
				{this.props.count}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	count: state.counter
});

export default connect(
	mapStateToProps,
	{
		increaseCounter,
		decreaseCounter
	}
)(Counter);

