import type { ReactElement } from 'react';
import type { PetAction } from '../features/pets/pets';
import useAuthenticated from '../hooks/useAuthenticated';
import type { AllPets } from './components';

function CardPets({ allUserPets }: AllPets): ReactElement {
	const { useIsLogged } = useAuthenticated();
	return (
		<>
			{useIsLogged() &&
				allUserPets?.map(
					({
						id,
						contenido,
						chip,
						nombre,
						raza,
						especie,
					}: PetAction): ReactElement => (
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
