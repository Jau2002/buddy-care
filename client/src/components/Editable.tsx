import { ErrorMessage, Field } from 'formik';
import { ReactElement } from 'react';
import type { Content } from './components';

function Editable({ type, placeholder, name }: Content): ReactElement {
	return (
		<section>
			<label htmlFor={type}>{name}</label>
			<Field
				type={type}
				id={type}
				name={type}
				placeholder={placeholder}
			/>
			<ErrorMessage
				name={type}
				component='span'
			/>
		</section>
	);
}

export default Editable;
