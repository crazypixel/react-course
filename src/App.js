import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';

// components
import SignIn from './components/SignIn';
import List from './components/List';

const App = () => (
	<Provider store={store}>
		<Router>
			<Switch>
				<Route exact path="/" component={SignIn}/>
				<Route path="/list" component={List}/>
			</Switch>
		</Router>
	</Provider>
);

export default App;
