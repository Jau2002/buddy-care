import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hook';
import type { LogInAction } from '../features/logger/logger';
import { selectLogIn } from '../features/logger/logInSlice';
import { getPets } from '../features/pets/petActions';
import type { PetAction } from '../features/pets/pets';
import { selectPets } from '../features/pets/petSlice';
import type { Query } from '../utils/utils';
import type { dispatchPets, MedicalPets } from './hook';

function useMedicalPets(): MedicalPets {
	const dispatch: dispatchPets = useAppDispatch();

	const logger: LogInAction[] = useAppSelector(selectLogIn);

	const id: number[] = logger.map(({ id }: LogInAction): number => id);

	const query: Query = {
		myQuery: `SELECT pfvet_mascotas.*, pfvet_adjuntos.* FROM pfvet_mascotas INNER JOIN pfvet_adjuntos ON pfvet_mascotas.id=pfvet_adjuntos.id_originador WHERE pfvet_mascotas.id_cliente=${id} AND TRIM(originador)='MASCOTA';`,
	};

	useEffect(() => {
		dispatch(getPets(query));
	}, [dispatch]);

	const allUserPets: PetAction[] = useAppSelector(selectPets);

	return { allUserPets };
}

export default useMedicalPets;