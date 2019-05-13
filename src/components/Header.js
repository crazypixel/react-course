import React, {Component} from 'react';
import styled from 'styled-components';

// components
import Button from './common/Button';
import Input from './common/Input';

class Header extends Component {
	state = {
		name: '',
		points: 0,
		grade: 0
	};
	
	handleChange = (key, isNum) => e =>
		this.setState({[key]: isNum ? parseInt(e.target.value) : e.target.value});
	
	add = () => {
		const {addItem, classes} = this.props;
		const {name, points, grade} = this.state;
		
		const item = {
			id: classes.length,
			name,
			points,
			grade
		};
		
		addItem(item);
	};
	
	render() {
		return (
			<Container>
				<Title>GPA Calculator</Title>
				
				<InputsContainer>
					<StyledInput
						placeholder="type the course name"
						label="course name"
						onChange={this.handleChange('name')}
					/>
					<StyledInput
						placeholder="type the points"
						label="points"
						onChange={this.handleChange('points', true)}
					/>
					<StyledInput
						placeholder="type the grade"
						label="grade"
						onChange={this.handleChange('grade', true)}
					/>
				</InputsContainer>
				
				<StyledButton onClick={this.add}>add</StyledButton>
			</Container>
		);
	}
}

export default Header;

const StyledInput = styled(Input)`
	margin: 0 10px;
`;

const StyledButton = styled(Button)`
	width: 200px;
`;

const InputsContainer = styled.div`
	display: flex;
	margin: 20px 0;
`;

const Container = styled.div`
	width: 100%;
	min-height: 200px;
	border-bottom: 1px solid #000;
	background: #fafafa;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	box-sizing: border-box;
	padding: 40px;
`;

const Title = styled.div`
	font-size: 40px;
	color: #444;
`;
