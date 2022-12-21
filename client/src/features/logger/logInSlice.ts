import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import type { LogInAction, LogInState, selectorLogger } from '../reducers';

const initialState: LogInState = {
	log: [],
};

const logInSlice = createSlice({
	name: 'logIn',
	initialState,
	reducers: {
		getUserIsLogIn: (state: any, { payload }: PayloadAction<object>) => ({
			...state,
			log: payload,
		}),
	},
});

export const selectLogIn: selectorLogger = (state: RootState): LogInAction[] =>
	state.logger.log;

export const { getUserIsLogIn } = logInSlice.actions;

export default logInSlice.reducer;
