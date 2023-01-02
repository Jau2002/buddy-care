import type { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import type { TypedUseSelectorHook } from 'react-redux';
import { LogInState, petsState } from '../features/reducers';
import store from './store';

interface Store {
	logger: LogInState;
	pets: petsState;
}

type StoreReducers = ToolkitStore<Store>;

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = () => typeof store.dispatch;

type SelectorsApp = TypedUseSelectorHook<RootState>;
