export const API_REQUEST = 'API_REQUEST';

const apiRequest = type => ({
	BASE: type,
	PENDING: `${type}_PENDING`,
	SUCCESS: `${type}_SUCCESS`,
	ERROR: `${type}_ERROR`,
});

export const ADD_ITEM = 'ADD_ITEM';
export const SET_RATING = 'SET_RATING';

export const FETCH_ITEMS = apiRequest('FETCH_ITEMS');
