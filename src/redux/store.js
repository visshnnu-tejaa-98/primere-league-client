import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { getAllMatchesReducer, getSingleMatchReducer } from './reducers/matchReducers';

const reducer = combineReducers({
	allMatches: getAllMatchesReducer,
	singleMatchDetais: getSingleMatchReducer,
});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
