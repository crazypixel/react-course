import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
	React.createElement('ul', null, [
		React.createElement('li', null, 'eggs'),
		React.createElement('li', null, 'bread'),
		React.createElement('li', null, 'milk'),
	]),
	document.getElementById('root')
);
