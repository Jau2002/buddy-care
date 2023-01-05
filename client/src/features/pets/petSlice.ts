import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/app';
import type {
	PayloadPet,
	PetAction,
	PetsState,
	SelectorPet,
	SelectorPets,
	SlicePet,
} from './pets';

const initialState: PetsState = {
	pets: [],
	detailPet: [],
};

const petSlice: SlicePet = createSlice({
	name: 'pets',
	initialState,
	reducers: {
		getPetForClient: (state: any, { payload }: PayloadPet): PetsState => ({
			...state,
			pets: payload,
		}),
		getDetailPet: (state: any, { payload }: PayloadPet): PetsState => ({
			...state,
			detailPet: payload,
		}),
	},
});

export const selectPets: SelectorPets = (state: RootState): PetAction[] =>
	state.pets.pets;

export const selectPet: SelectorPet = (state: RootState): PetAction[] =>
	state.pets.detailPet;

export const { getPetForClient, getDetailPet } = petSlice.actions;

export default petSlice.reducer;
