import { ReactElement } from 'react';
import Forms from '../components/Forms';
import { email } from '../utils/form';

function UserValidate(): ReactElement {
	return (
		<Forms
			form={email}
			submit='Validar correo'
			title='Verificar correo electrónico'
		/>
	);
}

export default UserValidate;
