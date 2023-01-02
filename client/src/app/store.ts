import { configureStore } from '@reduxjs/toolkit';
import logInReducer from '../features/logger/logInSlice';
import petSlice from '../features/pets/petSlice';
import type { StoreReducers } from './app';

const store: StoreReducers = configureStore({
	reducer: {
		logger: logInReducer,
		pets: petSlice,
	},
});

export default store;
