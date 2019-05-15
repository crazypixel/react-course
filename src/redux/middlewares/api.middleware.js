import * as AT from '../action.types';

const apiMiddleware = store => next => action => {
	if (action.type !== AT.API_REQUEST) {
		return next(action);
	}
	
	const {baseAction, url, method} = action.meta;
	
	store.dispatch({type: baseAction.PENDING});
	
	fetch(url, {
		method
	})
		.then(res => res.json())
		.then(payload => store.dispatch({type: baseAction.SUCCESS, payload}))
		.catch(payload => store.dispatch({type: baseAction.ERROR, payload}));
};

export default apiMiddleware;
