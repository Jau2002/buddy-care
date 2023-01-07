import type { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import type { TypedUseSelectorHook } from 'react-redux';
import type { LogInState } from '../features/logger/logger';
import type { MailState } from '../features/mailer/mail';
import type { PetsState } from '../features/pets/pets';
import store from './store';

interface Store {
	logger: LogInState;
	medical: PetsState;
	massive: MailState;
}

type StoreReducers = ToolkitStore<Store>;

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = () => typeof store.dispatch;

type SelectorsApp = TypedUseSelectorHook<RootState>;
