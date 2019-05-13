import React from 'react';
import styled from 'styled-components';

const List = ({ data }) => {
	return (
		<ListContainer>
			{
				data.map(item => (
					<Item key={item.id}>
						<Checkbox checked={item.checked}/>
						<Label>{item.label}</Label>
					</Item>
				))
			}
		</ListContainer>
	);
};

export default List;

const Item = styled.div`
	margin: 6px 0;
	display: flex;
	align-items: center;
`;

const Label = styled.div`
	font-size: 24px;
  color: #444;
`;

const Checkbox = styled.div`
	width: 10px;
	height: 10px;
	border-radius: 50%;
	border: 1px solid #000;
	margin-right: 10px;
`;

const ListContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
