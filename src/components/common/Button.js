import React from 'react';
import styled from 'styled-components';

const Button = ({ label, onClick, className }) =>
	(<Container onClick={onClick} className={className}>{label}</Container>);

export default Button;

const Container = styled.div`
	width: 180px;
	height: 40px;
	background: #000;
	border-radius: 4px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 300ms;
	box-shadow: 0 5px 20px rgba(0, 0, 0, 0);
	
	&:hover {
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
		transform: scale(1.05);
	}
`;
