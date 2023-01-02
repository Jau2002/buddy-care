import { Dispatch, PayloadAction, Slice } from '@reduxjs/toolkit';
import { RootState } from '../app/app';

interface LogInAction {
	email: string;
	password: string;
	apellido: string;
	nombres: string;
	id: number;
}

interface LogInState {
	log: LogInAction[];
}

type SliceLogger = Slice<LogInState>;

interface Clear {
	log: never[];
}

type PayloadLogger = PayloadAction<LogInState>;

type SelectorLogger = (state: RootState) => LogInAction[];

interface DispatchUser {
	payload?: LogInAction;
	type: string;
}

type GetUser = Promise<DispatchUser>;

type GetUserAction = (dispatch: Dispatch) => GetUser;

type ClearUserAction = (dispatch: Dispatch) => DispatchUser;

type ClearUserFunc = () => ClearUserAction;
