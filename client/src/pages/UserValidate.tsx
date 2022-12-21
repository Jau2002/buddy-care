import { ReactElement } from 'react';
import Forms from '../components/Forms';
import { email } from '../utils/form';

function UserValidate(): ReactElement {
	return (
		<Forms
			form={email}
			submit='Validar correo'
		/>
	);
}

export default UserValidate;
