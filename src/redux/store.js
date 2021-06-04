import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { getAllMatchesReducer, getSingleMatchReducer } from './reducers/matchReducers';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';

const reducer = combineReducers({
	allMatches: getAllMatchesReducer,
	singleMatchDetais: getSingleMatchReducer,
	userRegister: userRegisterReducer,
	userLogin: userLoginReducer,
});

const userInfoFromLocalStorage = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo'))
	: null;
const allMatchesFromLocalStorage = localStorage.getItem('matches')
	? JSON.parse(localStorage.getItem('matches'))
	: null;

const initailState = {
	userLogin: {
		userInfo: userInfoFromLocalStorage,
	},
	allMatches: {
		matches: allMatchesFromLocalStorage,
	},
};
export const store = createStore(
	reducer,
	initailState,
	composeWithDevTools(applyMiddleware(thunk))
);
