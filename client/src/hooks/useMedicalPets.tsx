import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hook';
import type { LogInAction } from '../features/logger/logger';
import { selectLogIn } from '../features/logger/logInSlice';
import { getPets } from '../features/pets/petActions';
import type { PetAction } from '../features/pets/pets';
import { selectPets } from '../features/pets/petSlice';
import prevSubmit from '../utils/prevSubmit';
import type { dispatchPets, Location, MedicalPets } from './hook';

function useMedicalPets(): MedicalPets {
	const dispatch: dispatchPets = useAppDispatch();

	const { pathname }: Location = useLocation();

	const logger: LogInAction[] = useAppSelector(selectLogIn);

	const id: number[] = logger.map(({ id }: LogInAction): number => id);

	useEffect(() => {
		dispatch(getPets(prevSubmit({ id }, pathname)));
	}, [dispatch]);

	const allUserPets: PetAction[] = useAppSelector(selectPets);

	return { allUserPets };
}

export default useMedicalPets;
