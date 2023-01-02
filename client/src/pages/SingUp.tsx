import type { ReactElement } from 'react';
import Forms from '../components/Forms';
import GoToHome from '../components/GoToHome';
import { logIn } from '../utils/form';

function SingUp(): ReactElement {
	return (
		<>
			<Forms
				form={logIn}
				submit='Crear'
				title='Crea tu propia cuenta'
			/>
			<GoToHome />
		</>
	);
}

export default SingUp;
