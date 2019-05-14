import React from 'react';
import styled from 'styled-components';
import {range} from 'lodash';

const Rating = props => {
	const circles = range(1, props.amount);

	return (
		<Container>
			{
				circles.map(id =>
					<Circle
						background={id <= props.value ? 'red' : '#e0e0e0'}
						key={id}
						onClick={() => props.onClick(id)}
					
					/>
				)
			}
		</Container>
	);
};

export default Rating;

const Container = styled.div`
	display: flex;
`;

const Circle = styled.div`
	background: ${({background}) => background};
	width: 15px;
	height: 15px;
	border-radius: 50%;
	margin: 0 2px;
	cursor: pointer;
	
	&:hover {
		background: orangered;
	}
`;
