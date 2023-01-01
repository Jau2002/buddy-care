import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hook';
import { selectLogIn } from '../features/logger/logInSlice';
import { getPets } from '../features/pets/petActions';
import { selectPets } from '../features/pets/petSlice';
import { LogInAction, petAction } from '../features/reducers';
import type { Query } from '../utils/utils';
import type { dispatchPets, MedicalPets } from './hook';

function useMedicalPets(): MedicalPets {
	const dispatch: dispatchPets = useAppDispatch();

	const logger: LogInAction[] = useAppSelector(selectLogIn);

	const id: number[] = logger.map(({ id }: LogInAction): number => id);

	const query: Query = {
		myQuery: `SELECT * FROM pfvet_mascotas WHERE id_cliente=${id}`,
	};

	useEffect(() => {
		dispatch(getPets(query));
	}, [dispatch]);

	const allUserPets: petAction[] = useAppSelector(selectPets);

	return { allUserPets };
}

export default useMedicalPets;
