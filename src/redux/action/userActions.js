import { BACKEND_ENDPOINT } from '../../endpoints';
import {
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAILURE,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAILURE,
	USER_LOGOUT,
	USER_SET_FAVOURITE_TEAM_REQUEST,
	USER_SET_FAVOURITE_TEAM_SUCCESS,
	USER_SET_FAVOURITE_TEAM_FAILURE,
} from '../constants/userConstants';

// register
export const userRegisterRequest = () => {
	return {
		type: USER_REGISTER_REQUEST,
	};
};

export const userRegisterSuccess = (userInfo) => {
	return {
		type: USER_REGISTER_SUCCESS,
		payload: userInfo,
	};
};

export const userRegisterFailure = (error) => {
	return {
		type: USER_REGISTER_FAILURE,
		payload: error,
	};
};

// login
export const userLoginRequest = () => {
	return {
		type: USER_LOGIN_REQUEST,
	};
};

export const userLoginSuccess = (userInfo) => {
	return {
		type: USER_LOGIN_SUCCESS,
		payload: userInfo,
	};
};

export const userLoginFailure = (error) => {
	return {
		type: USER_LOGIN_FAILURE,
		payload: error,
	};
};

export const userLogout = () => {
	return {
		type: USER_LOGOUT,
		payload: {},
	};
};

////////////////////////////////////////////////////////////////////////////////

// register
export const register = (name, email, password, conformPassword) => {
	return async (dispatch) => {
		try {
			dispatch(userRegisterRequest());
			let data = { name, email, password, conformPassword };
			const req = await fetch(`${BACKEND_ENDPOINT}/api/users/register`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			const res = await req.json();
			dispatch(userRegisterSuccess(res));
		} catch (error) {
			console.log(error);
			dispatch(userRegisterFailure());
		}
	};
};

// logout
export const login = (email, password) => {
	return async (dispatch) => {
		try {
			dispatch(userLoginRequest());
			let data = { email, password };
			const req = await fetch(`${BACKEND_ENDPOINT}/api/users/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			const res = await req.json();
			dispatch(userLoginSuccess(res));
			localStorage.setItem('userInfo', JSON.stringify(res));
		} catch (error) {
			console.log(error);
			dispatch(userLoginFailure('Something went wrong'));
		}
	};
};

// logout
export const logout = () => {
	return async (dispatch) => {
		dispatch(userLogout());
		localStorage.removeItem('userInfo');
	};
};
