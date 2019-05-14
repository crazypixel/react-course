import React from 'react';
import styled from 'styled-components';

// components
import Card from './common/Card';
import Button from './common/Button';

const SignIn = props => {
	return (
		<Container>
			<Card>
				<Title>sign in</Title>
				<StyledButton
					label="sign in"
					onClick={() => props.history.push('/list')}
				/>
			</Card>
		</Container>
	);
};

export default SignIn;

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Title = styled.div`
	font-size: 24px;
	color: #444
`;

const StyledButton = styled(Button)`
	width: 100%;
	margin-top: 40px;
	background: #a90329; /* Old browsers */
	background: -moz-linear-gradient(-45deg,  #a90329 0%, #8f0222 44%, #6d0019 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(-45deg,  #a90329 0%,#8f0222 44%,#6d0019 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(135deg,  #a90329 0%,#8f0222 44%,#6d0019 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a90329', endColorstr='#6d0019',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
`;
