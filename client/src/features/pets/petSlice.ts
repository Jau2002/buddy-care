import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/app';
import type {
	PayloadPet,
	PetAction,
	PetsState,
	SelectorPets,
	SlicePet,
} from './pets';

const initialState: PetsState = {
	pet: [],
};

const petSlice: SlicePet = createSlice({
	name: 'pets',
	initialState,
	reducers: {
		getPetForClient: (state: any, { payload }: PayloadPet): PetsState => ({
			...state,
			pet: payload,
		}),
	},
});

export const selectPets: SelectorPets = (state: RootState): PetAction[] =>
	state.pets.pet;

export const { getPetForClient } = petSlice.actions;

export default petSlice.reducer;
