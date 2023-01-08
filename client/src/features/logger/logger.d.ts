import { Dispatch, PayloadAction, Slice } from '@reduxjs/toolkit';
import type { RootState } from '../app/app';

interface LogInAction {
	email: string;
	password: string;
	apellido: string;
	nombres: string;
	id: number;
	cp: number;
	falta: number;
	instagram: string;
	facebook: string;
	localidad: string;
	pais: string;
	telefono: number;
	notas_int: string;
}
interface UserIsRegister {
	email: string;
}

interface UserCreated {
	email?: string;
	password?: string;
	code?: string;
	surname?: string;
	name?: string;
	country?: string;
	state?: string;
	direction?: string;
	number?: string;
}

interface LogInState {
	log: LogInAction[];
	user: UserIsRegister[];
	out: UserCreated[];
}

type SliceLogger = Slice<LogInState>;

type PayloadLogger = PayloadAction<LogInState>;

type SelectorLogger = (state: RootState) => LogInAction[];

type SelectorUser = (state: RootState) => UserIsRegister[];

type SelectorCreated = (state: RootState) => UserCreated[];

interface DispatchLogger {
	payload?: LogInAction;
	type: string;
}

interface DispatchUser {
	payload?: UserIsRegister;
	type: string;
}

interface DispatchUserCreate {
	payload?: UserCreated;
	type: string;
}

type GetUser = Promise<DispatchLogger>;

type GetUserAction = (dispatch: Dispatch) => GetUser;

type ClearUserAction = (dispatch: Dispatch) => DispatchLogger;

type ClearUserFunc = () => ClearUserAction;

type ValidateUser = Promise<DispatchUser>;

type ValidateUserIsRegister = (dispatch: Dispatch) => ValidateUser;

type CreateUser = Promise<DispatchUserCreate>;

type PostUserRegister = (dispatch: Dispatch) => CreateUser;
