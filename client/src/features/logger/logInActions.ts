import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Query } from '../../utils/utils';
import type {
	ClearUserAction,
	ClearUserFunc,
	DispatchUser,
	GetUser,
	GetUserAction,
} from './logger';
import { clearUserIfLogIn, getUserIsLogIn } from './logInSlice';

export function getUser(query: Query): GetUserAction {
	return async (dispatch: Dispatch): GetUser => {
		const { data } = await axios.post('/query', query);
		try {
			return dispatch(getUserIsLogIn(data));
		} catch (err) {
			throw new Error((err as Error).message);
		}
	};
}

export const clearUser: ClearUserFunc =
	(): ClearUserAction =>
	(dispatch: Dispatch): DispatchUser =>
		dispatch(clearUserIfLogIn([]));
