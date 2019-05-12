import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from 'styled-components';

const list = [
	{id: 0, label: 'foo', checked: false},
	{id: 2, label: 'foo 2', checked: true},
	{id: 1, label: 'foo 1', checked: false}
];

const App = () => (
	<Page>
		<Container>
			<Title>my todo list</Title>
			<Card>
				
				<StyledInput placeholder="the placeholder"/>
				<Button>add new item</Button>
				
				<Divider/>
				
				<List>
					{
						list.map(item => (
							<Item key={item.id}>
								<Checkbox checked={item.checked}/>
								<Label>{item.label}</Label>
							</Item>
						))
					}
				</List>
			</Card>
		</Container>
	</Page>
);

const Page = styled.div`
	width: 100vw;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const Title = styled.div`
	font-size: 30px;
	color: #fff;
	margin-bottom: 20px;
	text-transform: capitalize;
`;

const Card = styled.div`
	width: 410px;
	min-height: 600px;
	background: #fff;
	box-shadow: 0 5px 20px rgba(0,0,0,.2);
	border-radius: 4px;
	box-sizing: border-box;
	padding: 40px;
`;

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

const Divider = styled.div`
	height: 1px;
	width: 100%;
	background: #979797;
	margin: 20px 0;
`;

const List = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledInput = styled.input`
	width: 100%;
	height: 40px;
	box-sizing: border-box;
	padding: 0 20px;
	font-size: 14px;
	transition: all 2000ms;
	border: 2px solid #c3c3c3;
	
	&:focus {
		border-color: orangered;
	}
`;

const Button = styled.div`
	width: 100%;
	height: 40px;
	margin-top: 40px;
	color: #fff;
	background: #000;
	display: flex;
	align-items: center;
	justify-content: center;
	text-transform: uppercase;
	transition: all 300ms;
	cursor: pointer;
	
	&:hover {
		background: red;
	}
`;

ReactDOM.render(<App/>, document.getElementById('root'));
