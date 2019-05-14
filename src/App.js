import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// components
import SignIn from './components/SignIn';
import List from './components/List';

const App = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={SignIn}/>
			<Route path="/list" component={List}/>
		</Switch>
	</Router>
);

export default App;
