import { ReactElement } from 'react';
import Forms from '../components/Forms';
import { passwords } from '../utils/form';

function PasswordRecovery(): ReactElement {
	return (
		<Forms
			form={passwords}
			submit='Cambiar contraseña'
		/>
	);
}

export default PasswordRecovery;
