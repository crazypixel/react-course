import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import Counter from './components/Counter';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Counter />
			</Provider>
		);
	}
}

export default App;
