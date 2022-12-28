import { configureStore } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import logInReducer from '../features/logger/logInSlice';
import type { Store } from './app';

const store: ToolkitStore<Store> = configureStore({
	reducer: {
		logger: logInReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
