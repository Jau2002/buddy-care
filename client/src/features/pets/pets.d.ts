import { PayloadAction, Slice } from '@reduxjs/toolkit';
import { RootState } from '../app/app';

interface PetsState {
	pets: never[];
	detailPet: never[];
}

interface PetAction {
	id: number;
	id_cliente: number;
	nombre: string;
	especie: string;
	raza: string;
	edad: number;
	peso: number;
	estado: string;
	id_madre: number;
	id_padre: number;
	adjunto: string;
	nota: string;
	chip: number;
	falta: Date;
	halta: TimeRanges;
	id_originador: number;
	originador: string;
	contenido: string;
}

type SlicePet = Slice<PetsState>;

type PayloadPet = PayloadAction<PetsState>;

type SelectorPets = (state: RootState) => PetAction[];

type SelectorPet = (state: RootState) => PetAction[];

interface DispatchPets {
	payload?: PetsState;
	type: string;
}

type GetPets = Promise<DispatchPets>;

type GetPetsAction = (dispatch: Dispatch) => GetPets;
