import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from "./common/Button";
import styled from 'styled-components';

const App = () => (
	<Container>
		<Button
			label="click here"
			handleClick={() => alert(1)}
		/>
	</Container>
);

const Container = styled.div`
	width: 260px;
	height: 300px;
	display: flex;
	flex-direction: column;
	border: 1px solid #444;
	align-items: center;
	margin: 0 auto;
	margin-top: 40px;
	box-sizing: border-box;
	padding: 20px;
	box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
`;

ReactDOM.render(
	<App />,
	document.getElementById('root')
);


