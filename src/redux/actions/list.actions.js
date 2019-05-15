import * as AT from '../action.types';

export const addItem = item => ({
	type: AT.ADD_ITEM,
	payload: {
		item
	}
});

export const setRating = (id, rating) => ({
	type: AT.SET_RATING,
	payload: {
		id,
		rating
	}
});

export const fetchItems = () => ({
	type: AT.API_REQUEST,
	meta: {
		url: 'http://www.mocky.io/v2/5cdabc36300000500068c9b8',
		method: 'GET',
		// body: {},
		baseAction: AT.FETCH_ITEMS
	},
});
