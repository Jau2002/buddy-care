import { Form, Formik } from 'formik';
import { ReactElement } from 'react';
import Editable from '../components/Editable';
import authenticating from '../hooks/authenticating';
import type { Attributes } from '../utils/utils';
import validator from '../utils/validator';
import type { FormsAssociation, Type } from './components';

function Forms({ form, submit }: FormsAssociation): ReactElement {
	const { defaultInputs, handleSubmit, pathname } = authenticating();
	return (
		<Formik
			initialValues={defaultInputs}
			validate={(values: Type): Type => validator(values, pathname)}
			onSubmit={handleSubmit}
		>
			<Form>
				{form.map(
					({
						id,
						name,
						placeholder,
						type,
						display,
					}: Attributes): ReactElement => (
						<Editable
							key={id}
							type={type}
							placeholder={placeholder}
							name={name}
							display={display}
						/>
					)
				)}
				<button type='submit'>{submit}</button>
			</Form>
		</Formik>
	);
}

export default Forms;
