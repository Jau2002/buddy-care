import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import type { LogInAction } from '../features/logger/logger';
import useAuthenticated from '../hooks/useAuthenticated';
import Pets from './Pets';

function Account(): ReactElement {
	const { logger, useIsLogged } = useAuthenticated();
	return (
		<>
			<Header />
			{useIsLogged() &&
				logger.map(
					({
						id,
						nombres,
						apellido,
						email,
						cp,
						falta,
						instagram,
						facebook,
						localidad,
						pais,
						telefono,
						notas_int,
					}: LogInAction) => (
						<div key={id}>
							<h2>Nombres: {nombres}</h2>
							<h3>Apellidos: {apellido}</h3>
							<span>Correo: {email}</span>
							<Link to='/signIn/'>
								<button type='button'>Cambiar contraseña</button>
							</Link>
							<p>Correo postal: {cp}</p>
							<span>Primer registro: {falta}</span>
							<a
								href={instagram}
								target='_blank'
								rel='noreferrer'
							>
								Instagram
							</a>
							<a
								href={facebook}
								target='_blank'
								rel='noreferrer'
							>
								Facebook
							</a>
							<samp>Localidad: {localidad}</samp>
							<p>Pais: {pais}</p>
							<span>Movil: {telefono}</span>
							<p>Nota: {notas_int}</p>
						</div>
					)
				)}
			<Pets />
			<Footer />
		</>
	);
}

export default Account;
