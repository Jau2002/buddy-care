import type { ReactElement } from 'react';
import type { PetAction } from '../features/pets/pets';
import useAuthenticated from '../hooks/useAuthenticated';
import useMedicalPets from '../hooks/useMedicalPets';

function CardPets(): ReactElement {
	const { allUserPets } = useMedicalPets();
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
						<div key={id} className='card mb-3 card-pets-div'>
							<div className='row g-0'>
								<div className='col-md-4'>
									<img 
									    className='img-fluid rounded-start card-pets-img'
										src={contenido}
										alt={raza}
										loading='lazy'
									/>
								</div>
								<div className='col-md-8'>
									<div className='card-body'>
										<h2 className='card-title card-pets-h2'>{nombre}</h2>
										<span className='card-text card-pets-span'>{chip}</span>
										<p className='card-text card-pets-p'>{especie}</p>
									</div>
								</div>
							</div>
						</div>
					)
				)}
		</>
	);
}

export default CardPets;
