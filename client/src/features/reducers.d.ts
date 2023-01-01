import { Dispatch } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface LogInState {
	log: LogInAction[];
}

interface LogInAction {
	email: string;
	password: string;
	apellido: string;
	nombres: string;
	id: number;
}

type GetUserAction = (dispatch: Dispatch) => Promise<DispatchUser>;

interface DispatchUser {
	payload?: LogInAction;
	type: string;
}

type SelectorLogger = (state: RootState) => LogInAction[];

interface Clear {
	log: never[];
}

type clearUserAction = (dispatch: Dispatch) => any;

interface petsState {
	pet: [];
}

interface petAction {
	id: number;
	adjunto: string;
	chip: number;
	nombre: string;
	edad: number;
	especie: string;
	estado: string;
	falta: Date;
	halta: TimeRanges;
	id_cliente: number;
	id_madre: number;
	id_padre: number;
	nota: string;
	peso: number;
	raza: string;
}

type SelectorPets = (state: RootState) => petAction[];
