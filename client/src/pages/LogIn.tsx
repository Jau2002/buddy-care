import { ReactElement } from 'react';
import Forms from '../components/Forms';
import { logIn } from '../utils/form';

function LogIn(): ReactElement {
	return (
		<>
			<Forms
				form={logIn}
				submit='Iniciar sesión'
			/>
		</>
	);
}

export default LogIn;
