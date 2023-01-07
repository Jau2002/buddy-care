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

export const selectPets: SelectorPets = ({ medical }: RootState): PetAction[] =>
	medical.pets;

export const selectPet: SelectorPet = ({ medical }: RootState): PetAction[] =>
	medical.detailPet;

export const { getPetForClient, getDetailPet } = petSlice.actions;

export default petSlice.reducer;
