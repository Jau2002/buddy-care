import { Form, Formik } from 'formik';
import type { ReactElement } from 'react';
import Editable from '../components/Editable';
import useAuthenticated from '../hooks/useAuthenticated';
import type { Attributes } from '../utils/utils';
import validator from '../utils/validator';
import type { FormsAssociation, Type } from './components';

function Forms({ form, submit, title }: FormsAssociation): ReactElement {
	const { defaultInputs, handleSubmit, pathname } = useAuthenticated();
	return (
		<Formik
			initialValues={defaultInputs}
			validate={(values: Type): Type => validator(values, pathname)}
			onSubmit={handleSubmit}
		>
			<Form>
				<h5 className='fw-normal mb-3 pb-3 form-section--h5 form-section--h5'>
					{title}
				</h5>
				{form.map(
					(
						{ name, placeholder, type, display }: Attributes,
						i: number
					): ReactElement => (
						<Editable
							key={i}
							type={type}
							placeholder={placeholder}
							name={name}
							display={display}
						/>
					)
				)}
				<div className='pt-1 mb-4'>
					<button
						type='submit'
						className='btn btn-dark btn-lg btn-block form-section--label'
					>
						{submit}
					</button>
				</div>
			</Form>
		</Formik>
	);
}

export default Forms;
