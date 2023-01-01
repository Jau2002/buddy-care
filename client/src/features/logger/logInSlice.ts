import type { PayloadAction, Slice } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import type {
	Clear,
	LogInAction,
	LogInState,
	SelectorLogger,
} from '../reducers';

const initialState: LogInState = {
	log: [],
};

const logInSlice: Slice<LogInState> = createSlice({
	name: 'logIn',
	initialState,
	reducers: {
		getUserIsLogIn: (
			state: any,
			{ payload }: PayloadAction<LogInState>
		): LogInState => ({
			...state,
			log: payload,
		}),
		clearUserIfLogIn: (state): Clear => ({
			...state,
			log: [],
		}),
	},
});

export const selectLogIn: SelectorLogger = (state: RootState): LogInAction[] =>
	state.logger.log;

export const { getUserIsLogIn, clearUserIfLogIn } = logInSlice.actions;

export default logInSlice.reducer;
