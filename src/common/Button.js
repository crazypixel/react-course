import React from 'react';
import styled from 'styled-components';

const Button = ({ label, handleClick }) => (
	<Container onClick={handleClick}>{label}</Container>
);

export default Button;

const Container = styled.div`
	padding: 8px 20px;
	background: #000;
	max-width: 100px;
	border-radius: 4px;
	color: #fff;
	transition: all 300ms;
	text-transform: uppercase;
	cursor: pointer;
	
	&:hover {
		background: #363636;
	}
`;
