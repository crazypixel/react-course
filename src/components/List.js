import React, {Component} from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

// components
import Button from './common/Button';
import Card from './common/Card';
import Input from './common/Input';
import Rating from './common/Rating';

class List extends Component {
	state = {
		data: [
			{id: 0, label: 'foo', rating: 0},
			{id: 1, label: 'foo1', rating: 0},
			{id: 2, label: 'foo2', rating: 0},
		]
	};
	
	addItem = () => {
		if (!this.input.value) {
			return;
		}
		
		this.setState({
			data: [
				...this.state.data,
				{
					id: this.state.data.length,
					label: this.input.value,
					rating: 0
				}
			]
		}, () => {
			this.input.value = '';
		});
	};
	
	handleKeyUp = e => {
		if (e.which === 13) {
			this.addItem();
		}
	};
	
	setRating = (id, total) => {
		this.setState({
			data: this.state.data.map(obj => ({
				...obj,
				rating: obj.id === id ? total : obj.rating
			}))
		});
	};
	
	render() {
		const {data} = this.state;
		
		return (
			<Container>
				<Fade>
					<StyledCard>
						<Input
							placeholder="type your question..."
							onRef={el => this.input = el}
							onKeyUp={this.handleKeyUp}
						/>
						<Button label="add" onClick={this.addItem}/>
					</StyledCard>
				</Fade>
				
				<Fade>
					{
						data.map(item => (
							<StyledCard key={item.id}>
								<Label>{item.label}</Label>
								<Rating
									amount={6}
									value={item.rating}
									onClick={total => this.setRating(item.id, total)}
								/>
							</StyledCard>
						))
					}
				</Fade>
			</Container>
		);
	}
}

export default List;

const Container = styled.div`
	width: 100vw;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const StyledCard = styled(Card)`
	width: 60vw;
	margin-bottom: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Label = styled.div`
	font-size: 24px;
	color: #2b1540;
`;
