import { ErrorMessage, Field } from 'formik';
import type { ReactElement } from 'react';
import type { Content } from './components';

function Editable({ type, placeholder, name, display }: Content): ReactElement {
	return (
		<section className='form-outline mb-4'>
			<label
				htmlFor={type}
				className='form-label form-section--label'
			>
				{display}
			</label>
			<Field
				type={type}
				id={type}
				name={name}
				placeholder={placeholder}
				className='form-control form-control-lg form-section--input'
			/>
			<div className='alert alert-danger p-1 m-x-2 form-section--div'>
				<ErrorMessage
					name={name}
					component='span'
					className='alert-link mb-0'
				/>
			</div>
		</section>
	);
}

export default Editable;
