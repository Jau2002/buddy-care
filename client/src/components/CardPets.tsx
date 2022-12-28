import { ReactElement } from 'react';

const CardPets = ({ ...props }): ReactElement => {
	return (
		<>
			<div>
				<img
					src={props.adjunto}
					alt='Pets_image'
				/>
			</div>

			<div>
				<p>{props.nombre}</p>
				<p>{props.raza}</p>
				<p>{props.edad}</p>
			</div>
		</>
	);
};

export default CardPets;
