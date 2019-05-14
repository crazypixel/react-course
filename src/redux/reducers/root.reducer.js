import {combineReducers} from "redux";

// reducers
import user from './user.reducer';
import counter from './counter.reducer';


export default combineReducers({
	user,
	counter
});
