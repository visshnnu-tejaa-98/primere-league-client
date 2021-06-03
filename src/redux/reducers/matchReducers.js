import {
	GET_ALL_MATCHES_FAILURE,
	GET_ALL_MATCHES_REQUEST,
	GET_ALL_MATCHES_SUCCESS,
	GET_SINGLE_MATCHES_DETAILS_FAILURE,
	GET_SINGLE_MATCHES_DETAILS_REQUEST,
	GET_SINGLE_MATCHES_DETAILS_SUCCESS,
} from '../constants/matchConstants';

// Get all Matches
export const getAllMatchesReducer = (
	state = { loading: false, matches: [], error: '' },
	action
) => {
	switch (action.type) {
		case GET_ALL_MATCHES_REQUEST:
			return {
				...state,
				loading: true,
			};
		case GET_ALL_MATCHES_SUCCESS:
			return {
				...state,
				loading: false,
				matches: action.payload,
			};
		case GET_ALL_MATCHES_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

// get single match

export const getSingleMatchReducer = (state = { loading: false, match: {}, error: '' }, action) => {
	switch (action.type) {
		case GET_SINGLE_MATCHES_DETAILS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case GET_SINGLE_MATCHES_DETAILS_SUCCESS:
			return {
				...state,
				loading: false,
				match: action.payload,
			};
		case GET_SINGLE_MATCHES_DETAILS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
