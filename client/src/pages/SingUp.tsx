import type { ReactElement } from 'react';
import Forms from '../components/Forms';
import GoToHome from '../components/GoToHome';
import { signUp } from '../utils/form';

function SingUp(): ReactElement {
	return (
		<>
			<Forms
				form={signUp}
				submit='Crear'
				title='Crea tu propia cuenta'
			/>
			<GoToHome />
		</>
	);
}

export default SingUp;
