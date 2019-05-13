import React from 'react';
import styled from 'styled-components';

const Content = props => (
	<Container>
		{props.classes.map(item => (
			<Row key={item.id}>
				<Col>{item.name}</Col>
				<Col>{item.points}</Col>
				<Col>{item.grade}</Col>
			</Row>
		))}
	</Container>
);

export default Content;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
`;

const Row = styled.div`
	display: flex;
	margin: 10px 0;
`;

const Col = styled.div`
	width: 100px;
	height: 40px;
	border: 1px solid #444;
	color: #444;
	background: #bcbcbc;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	padding: 0 10px;
	margin: 0 10px;
`;
