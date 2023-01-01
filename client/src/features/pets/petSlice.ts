import type { PayloadAction, Slice } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import type { petAction, petsState, SelectorPets } from '../reducers';

const initialState: petsState = {
	pet: [],
};

const petSlice: Slice<petsState> = createSlice({
	name: 'pets',
	initialState,
	reducers: {
		getPetForClient: (
			state: any,
			{ payload }: PayloadAction<petsState>
		): petsState => ({
			...state,
			pet: payload,
		}),
	},
});

export const selectPets: SelectorPets = (state: RootState): petAction[] =>
	state.pets.pet;

export const { getPetForClient } = petSlice.actions;

export default petSlice.reducer;
