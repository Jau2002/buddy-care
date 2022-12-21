import axios from 'axios';
import type { DispatchUser, GetUserAction } from '../reducers';
import { getUserIsLogIn } from './logInSlice';

export function getUser(query: object): GetUserAction {
	return async (dispatch): Promise<DispatchUser> => {
		const { data } = await axios.post('/query', query);
		try {
			return dispatch(getUserIsLogIn(data));
		} catch (err) {
			throw new Error((err as Error).message);
		}
	};
}
