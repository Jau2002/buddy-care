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
					({
						id,
						contenido,
						chip,
						nombre,
						raza,
						especie,
					}: petAction): ReactElement => (
						<div key={id}>
							<img
								src={contenido}
								alt={raza}
								loading='lazy'
							/>
							<h2>{nombre}</h2>
							<span>{chip}</span>
							<p>{especie}</p>
						</div>
					)
				)}
		</>
	);
}

export default CardPets;
