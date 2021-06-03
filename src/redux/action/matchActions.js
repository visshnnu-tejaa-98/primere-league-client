import {
	GET_ALL_MATCHES_REQUEST,
	GET_ALL_MATCHES_SUCCESS,
	GET_ALL_MATCHES_FAILURE,
	GET_SINGLE_MATCHES_DETAILS_REQUEST,
	GET_SINGLE_MATCHES_DETAILS_SUCCESS,
	GET_SINGLE_MATCHES_DETAILS_FAILURE,
} from '../constants/matchConstants';
import { BACKEND_ENDPOINT } from '../../endpoints';

// get all matches
export const getAllMatchesRequest = () => {
	return {
		type: GET_ALL_MATCHES_REQUEST,
	};
};

export const getAllMatchesSuccess = (matches) => {
	return {
		type: GET_ALL_MATCHES_SUCCESS,
		payload: matches,
	};
};

export const getAllMatchesFailure = (error) => {
	return {
		type: GET_ALL_MATCHES_FAILURE,
		payload: error,
	};
};

// get single match details

export const getSingleMatchRequest = () => {
	return {
		type: GET_SINGLE_MATCHES_DETAILS_REQUEST,
	};
};

export const getSingleMatchSuccess = (match) => {
	return {
		type: GET_SINGLE_MATCHES_DETAILS_SUCCESS,
		payload: match,
	};
};

export const getSingleMatchFailure = (error) => {
	return {
		type: GET_SINGLE_MATCHES_DETAILS_FAILURE,
		payload: error,
	};
};

////////////////////////////////////////////////////////////////////

// get all matches
export const getAllMatches = () => {
	return async (dispatch) => {
		try {
			dispatch(getAllMatchesRequest());
			const req = await fetch(`${BACKEND_ENDPOINT}/api/matches`);
			const res = await req.json();
			console.log(res);
			dispatch(getAllMatchesSuccess(res));
		} catch (error) {
			console.log(error);
			dispatch(getAllMatchesFailure('Something went wrong'));
		}
	};
};

// get single match details

export const getMatchDetails = (id) => {
	return async (dispatch) => {
		try {
			dispatch(getSingleMatchRequest());
			const req = await fetch(`${BACKEND_ENDPOINT}/api/matches/${id}`);
			const res = await req.json();
			console.log(res);
			dispatch(getSingleMatchSuccess(res));
		} catch (error) {
			console.log(error);
			dispatch(getSingleMatchFailure('Something went wrong'));
		}
	};
};
