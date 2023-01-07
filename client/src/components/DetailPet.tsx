import type { ReactElement } from 'react';
import type { PetAction } from '../features/pets/pets';
import type { AllPets } from './components';

function DetailPet({ petForUser }: AllPets): ReactElement {
	return (
		<article>
			{petForUser?.map(
				({
					chip,
					contenido,
					edad,
					especie,
					estado,
					id,
					nombre,
					nota,
					peso,
					raza,
				}: PetAction): ReactElement => (
					<div key={id}>
						<samp>{chip}</samp>
						<img
							src={contenido}
							alt={especie}
							loading='lazy'
						/>
						<span>{edad}</span>
						<h2>{estado}</h2>
						<p>{nombre}</p>
						<p>{nota}</p>
						<p>{peso}</p>
						<p>{raza}</p>
					</div>
				)
			)}
		</article>
	);
}

export default DetailPet;
