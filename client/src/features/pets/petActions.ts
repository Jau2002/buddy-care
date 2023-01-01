import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import type { DispatchUser, GetUserAction } from '../reducers';
import { getPetForClient } from './petSlice';

export function getPets(query: object): GetUserAction {
	return async (dispatch: Dispatch): Promise<DispatchUser> => {
		const { data } = await axios.post('/query', query);
		try {
			return dispatch(getPetForClient(data));
		} catch (err) {
			throw new Error((err as Error).message);
		}
	};
}
