import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/app';
import type {
	Clear,
	LogInAction,
	LogInState,
	PayloadLogger,
	SelectorLogger,
	SliceLogger,
} from './logger';

const initialState: LogInState = {
	log: [],
};

const logInSlice: SliceLogger = createSlice({
	name: 'logIn',
	initialState,
	reducers: {
		getUserIsLogIn: (state: any, { payload }: PayloadLogger): LogInState => ({
			...state,
			log: payload,
		}),
		clearUserIfLogIn: (state: any, _: PayloadLogger): Clear => ({
			...state,
			log: [],
		}),
	},
});

export const selectLogIn: SelectorLogger = (state: RootState): LogInAction[] =>
	state.logger.log;

export const { getUserIsLogIn, clearUserIfLogIn } = logInSlice.actions;

export default logInSlice.reducer;
