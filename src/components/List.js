import React, {Component} from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import {connect} from "react-redux";
import {addItem, setRating, fetchItems} from '../redux/actions/list.actions';

// components
import Button from './common/Button';
import Card from './common/Card';
import Input from './common/Input';
import Rating from './common/Rating';

class List extends Component {
	componentDidMount() {
		this.props.fetchItems();
	}
	
	addItem = () => {
		if (!this.input.value) {
			return;
		}
		
		this.props.addItem({
			id: this.props.data.length,
			label: this.input.value,
			rating: 0
		});
		
		this.input.value = '';
	};
	
	handleKeyUp = e => {
		if (e.which === 13) {
			this.addItem();
		}
	};
	
	setRating = (id, total) => {
		this.props.setRating(id, total);
	};
	
	render() {
		const {data} = this.props;
		
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
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	data: state.list
});

export default connect(mapStateToProps, {
	addItem,
	setRating,
	fetchItems
})(List);

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
