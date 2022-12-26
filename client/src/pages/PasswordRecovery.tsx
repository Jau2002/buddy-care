import { ReactElement } from 'react';
import Forms from '../components/Forms';
import { passwords } from '../utils/form';

function PasswordRecovery(): ReactElement {
	return (
		<Forms
			form={passwords}
			submit='Cambiar contraseña'
			title='Verifica cambio de contraseña'
		/>
	);
}

export default PasswordRecovery;
