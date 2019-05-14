import * as AT from '../action.types';

export const increaseCounter = () => ({
	type: AT.ADD
});

export const decreaseCounter = () => ({
	type: AT.SUB
});
