import { ThunkDispatch } from '@reduxjs/toolkit';
import { Path } from 'react-router-dom';
import type { Type } from '../components/components';
import type {
	Clear,
	LogInState,
	petAction,
	petsState,
} from '../features/reducers';

type Submit = (values: Type) => any;

interface Auth {
	handleSubmit: Submit;
	defaultInputs: Type;
	pathname: string;
}

interface Location extends Path {
	state: unknown;
	key: Key;
}

type dispatcherUser = ThunkDispatch<LogInState>;

type dispatchedUser = ThunkDispatch<Clear>;

type dispatchPets = ThunkDispatch<petsState>;

type validateIsLogged = () => boolean;

interface Cleaning {
	handleClick;
	getIsALogged: validateIsLogged;
	logger: LogInAction[];
}

interface MedicalPets {
	allUserPets: petAction[];
}

type LocalStorage = string | null;
