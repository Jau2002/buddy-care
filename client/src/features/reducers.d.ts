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

type SelectorPets = (state: RootState) => petAction[];
