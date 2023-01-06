import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/app';
import type {
	LogInAction,
	LogInState,
	PayloadLogger,
	SelectorCreated,
	SelectorLogger,
	SelectorUser,
	SliceLogger,
	UserCreated,
	UserIsRegister,
} from './logger';

const initialState: LogInState = {
	log: [],
	user: [],
	out: [],
};

const logInSlice: SliceLogger = createSlice({
	name: 'logIn',
	initialState,
	reducers: {
		getUserIsLogIn: (state: any, { payload }: PayloadLogger): LogInState => ({
			...state,
			log: payload,
		}),
		clearUserIfLogIn: (state: any, _: PayloadLogger): LogInState => ({
			...state,
			log: [],
		}),
		validateUser: (state: any, { payload }: PayloadLogger): LogInState => ({
			...state,
			user: payload,
		}),
		createUser: (state: any, { payload }: PayloadLogger): LogInState => ({
			...state,
			out: payload,
		}),
	},
});

export const selectLogIn: SelectorLogger = (state: RootState): LogInAction[] =>
	state.logger.log;

export const selectUser: SelectorUser = (state: RootState): UserIsRegister[] =>
	state.logger.user;

export const selectSignUp: SelectorCreated = (
	state: RootState
): UserCreated[] => state.logger.out;

export const { getUserIsLogIn, clearUserIfLogIn, validateUser, createUser } =
	logInSlice.actions;

export default logInSlice.reducer;
