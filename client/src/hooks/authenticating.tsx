import type { Helpers, Type } from '../pages/pages';
// import validator from '../utils/validator';
import type { Auth, Submit } from './hook';

function authenticating(): Auth {
	const handleSubmit: Submit = (values: Type, { resetForm }: Helpers) => {
		console.log(values);
		resetForm();
	};

	const defaultInputs: Type = {
		email: '',
		password: '',
	};

	return { handleSubmit, defaultInputs };
}

export default authenticating;
