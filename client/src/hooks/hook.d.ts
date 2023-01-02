import { ThunkDispatch } from '@reduxjs/toolkit';
import { Path } from 'react-router-dom';
import type { Type } from '../components/components';
import type { LogInState } from '../features/logger/logger';
import type { PetAction, PetsState } from '../features/pets/pets';

type Submit = (values: Type) => any;

interface Auth {
	handleSubmit: Submit;
	defaultInputs: Type;
	pathname: string;
	useIsLogged: () => boolean;
}

interface Location extends Path {
	state: unknown;
	key: Key;
}

type dispatcherUser = ThunkDispatch<LogInState>;

type dispatchedUser = ThunkDispatch<Clear>;

type dispatchPets = ThunkDispatch<PetsState>;

interface Cleaning {
	handleClick;
	logger: LogInAction[];
}

interface MedicalPets {
	allUserPets: PetAction[];
}

type LocalStorage = string | null;
