import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hook';
import type { LogInAction } from '../features/logger/logger';
import { selectLogIn } from '../features/logger/logInSlice';
import { getPet, getPets } from '../features/pets/petActions';
import type { PetAction } from '../features/pets/pets';
import { selectPet, selectPets } from '../features/pets/petSlice';
import prevSubmit from '../utils/prevSubmit';
import type { dispatchPets, Location, MedicalPets, Param } from './hook';

function useMedicalPets(): MedicalPets {
	const { id }: Param = useParams();

	const dispatch: dispatchPets = useAppDispatch();

	const { pathname }: Location = useLocation();

	const logger: LogInAction[] = useAppSelector(selectLogIn);

	const id_client: number[] = logger.map(({ id }: LogInAction): number => id);

	const allUserPets: PetAction[] = useAppSelector(selectPets);

	const id_pet = allUserPets.find((pet: PetAction): number => {
		let idParam = Number(id);
		idParam = pet.id;
		return idParam;
	});

	useEffect(() => {
		dispatch(getPets(prevSubmit({ id_client }, pathname)));
		dispatch(getPet(prevSubmit({ id_pet, id_client }, pathname)));
	}, [dispatch]);

	const petForUser: PetAction[] = useAppSelector(selectPet);

	console.log({ petForUser, allUserPets });

	return { allUserPets, pathname, id_pet, petForUser };
}

export default useMedicalPets;
