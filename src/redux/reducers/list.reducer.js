import * as AT from '../action.types';

const initialState = [];

const listReducer = (state = initialState, action) => {
	switch (action.type) {
		case AT.ADD_ITEM:
			return [
				...state,
				action.payload.item
			];
		
		case AT.SET_RATING:
			const {id, rating} = action.payload;
			
			return state.map(obj => ({
				...obj,
				rating: obj.id === id ? rating : obj.rating
			}));
			
		case AT.FETCH_ITEMS.SUCCESS:
			return action.payload.data;
		
		default:
			return state;
	}
};

export default listReducer;
