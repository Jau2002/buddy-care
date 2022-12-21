import { configureStore } from '@reduxjs/toolkit';
import logInReducer from '../features/logger/logInSlice';

const store = configureStore({
	reducer: {
		logger: logInReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
