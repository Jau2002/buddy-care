import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { Query } from '../../utils/utils';
import type { GetPets, GetPetsAction } from './pets';
import { getPetForClient } from './petSlice';

export function getPets(query: Query): GetPetsAction {
	return async (dispatch: Dispatch): GetPets => {
		const { data } = await axios.post('/query', query);
		try {
			return dispatch(getPetForClient(data));
		} catch (err) {
			throw new Error((err as Error).message);
		}
	};
}
