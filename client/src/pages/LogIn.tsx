import { Form, Formik } from 'formik';
import { ReactElement } from 'react';
import Editable from '../components/Editable';
import authenticating from '../hooks/authenticating';
import { logIn } from '../utils/form';
import type { Attributes } from '../utils/utils';
import validator from '../utils/validator';
import type { Type } from './pages';

function LogIn(): ReactElement {
	const { defaultInputs, handleSubmit } = authenticating();
	return (
		<>
			<Formik
				initialValues={defaultInputs}
				onSubmit={handleSubmit}
				validate={(values: Type): Type => validator(values)}
			>
				{(): ReactElement => (
					<Form>
						{logIn.map(
							({ id, name, placeholder, type }: Attributes): ReactElement => (
								<Editable
									key={id}
									type={type}
									placeholder={placeholder}
									name={name}
								/>
							)
						)}
						<button type='submit'>Enviar</button>
					</Form>
				)}
			</Formik>
		</>
	);
}

export default LogIn;
