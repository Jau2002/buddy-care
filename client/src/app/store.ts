import { configureStore } from '@reduxjs/toolkit';
import logInReducer from '../features/logger/logInSlice';
import mailReducer from '../features/mailer/mailSlice';
import petsReducer from '../features/pets/petSlice';
import type { StoreReducers } from './app';

const store: StoreReducers = configureStore({
	reducer: {
		logger: logInReducer,
		medical: petsReducer,
		massive: mailReducer,
	},
});

export default store;
