import React from 'react';
import styled from 'styled-components';

const Input = props => (
	<StyledInput
		placeholder={props.placeholder}
		className={props.className}
		ref={props.onRef}
		onKeyUp={props.onKeyUp}
	/>
);

export default Input;

const StyledInput = styled.input`
	width: 100%;
	margin-right: 20px;
	height: 40px;
	border: 1px solid #444;
	box-sizing: border-box;
	padding: 0 20px;
	font-size: 14px;
	color: #444;
	border-radius: 4px;
`;
