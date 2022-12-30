import { ReactElement } from 'react';
import { petAction } from '../features/reducers';
import useCleaning from '../hooks/useCleaning';
import useMedicalPets from '../hooks/useMedicalPets';

function CardPets(): ReactElement {
	const { allUserPets } = useMedicalPets();
	const { getIsALogged } = useCleaning();
	console.log(allUserPets);
	return (
		<>
			{getIsALogged() &&
				allUserPets?.map(
					({ id, adjunto, chip, nombre, raza }: petAction): ReactElement => (
						<div key={id}>
							<img
								src={adjunto}
								alt={raza}
							/>
							<h2>{nombre}</h2>
							<span>{chip}</span>
						</div>
					)
				)}
		</>
	);
}

export default CardPets;
