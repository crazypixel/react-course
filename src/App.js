import React, {Component} from 'react';
import styled from 'styled-components';

// components
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

class App extends Component {
	state = {
		classes: [
			{id: 0, name: 'calculus', points: 2, grade: 40},
			{id: 1, name: 'algebra', points: 3, grade: 90},
		]
	};
	
	addItem = item => {
		this.setState({
			classes: this.state.classes.concat(item)
		});
	};
	
	render() {
		const {classes} = this.state;
		
		return (
			<Container>
				<Header addItem={this.addItem} classes={classes}/>
				<Content classes={classes}/>
				<Footer classes={classes}/>
			</Container>
		);
	}
}

export default App;

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: #e0e0e0;
    display: flex;
    flex-direction: column;
`;
