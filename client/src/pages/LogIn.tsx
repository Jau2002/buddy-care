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
			<Link to='/logIn/usr'>Olvide mi Contraseña</Link>
		</>
	);
}

export default LogIn;
