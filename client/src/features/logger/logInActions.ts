import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import type { clearUserAction, DispatchUser, GetUserAction } from '../reducers';
import { clearUserIfLogIn, getUserIsLogIn } from './logInSlice';

export function getUser(query: object): GetUserAction {
	return async (dispatch: Dispatch): Promise<DispatchUser> => {
		const { data } = await axios.post('/query', query);
		try {
			return dispatch(getUserIsLogIn(data));
		} catch (err) {
			throw new Error((err as Error).message);
		}
	};
}

export function clearUser(): clearUserAction {
	return (dispatch: Dispatch): DispatchUser => dispatch(clearUserIfLogIn());
}
