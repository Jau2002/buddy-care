import { ErrorMessage, Field } from 'formik';
import { ReactElement } from 'react';
import type { Content } from './components';

function Editable({ type, placeholder, name, display }: Content): ReactElement {
	return (
		<section>
			<label
				htmlFor={type}
				className='form-label'
			>
				{display}
			</label>
			<Field
				type={type}
				id={type}
				name={name}
				placeholder={placeholder}
				className='form-control form-control-lg'
			/>
			<ErrorMessage
				name={name}
				component='span'
			/>
		</section>
	);
}

export default Editable;
