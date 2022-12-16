import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Forms from '../components/Forms';
import { logIn } from '../utils/form';

function LogIn(): ReactElement {
	return (
		<>
			<Forms
				form={logIn}
				submit='Iniciar sesión'
			/>
			<div className='input-form--div'>
				<Link
					to='/logIn/usr'
					className='small text-muted'
				>
					Olvide mi Contraseña
				</Link>
				<p className='mb-5 pb-lg-2 input-form--p'>
					No tienes cuenta?
					<Link
						className='input-form'
						to='/logIn/usr'
					>
						Regístrate
					</Link>
				</p>
			</div>
		</>
	);
}

export default LogIn;
