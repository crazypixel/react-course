import React from 'react';
import styled from 'styled-components';

const Card = props => {
	return (
		<Container className={props.className}>
			{props.children}
		</Container>
	);
};

export default Card;

const Container = styled.div`
	background: #fff;
	border: 1px solid #8c8c8c;
	border-radius: 4px;
	box-sizing: border-box;
	padding: 20px;
	min-width: 300px;
	min-height: 100px;
	box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
`;
