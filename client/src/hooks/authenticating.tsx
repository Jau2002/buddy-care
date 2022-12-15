import type { Type } from '../components/components';
// import validator from '../utils/validator';
import md5 from 'md5';
import type { Auth, Helpers, Submit } from './hook';

function authenticating(): Auth {
	const handleSubmit: Submit = (values: Type, { resetForm }: Helpers) => {
		md5(values.password);
		resetForm();
	};

	const defaultInputs: Type = {
		email: '',
		password: '',
	};

	return { handleSubmit, defaultInputs };
}

export default authenticating;
