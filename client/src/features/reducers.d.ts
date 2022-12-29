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

type selectorLogger = (state: RootState) => LogInAction[];

interface Clear {
	log: never[];
}

type clearUserAction = (dispatch: Dispatch) => any;
