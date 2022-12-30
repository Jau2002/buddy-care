import type { Type } from '../components/components';

function validator({ email, password, code }: Type, pathname: string): Type {
	let errors: Type = {};

	const { logInValidated, userValidated, changeValidated } = {
		logInValidated: pathname === '/signIn/',
		userValidated: pathname === '/signIn/user',
		changeValidated: pathname === '/signIn/password',
	};

	if ((logInValidated || userValidated) && !email) {
		errors.email = 'Por favor ingresa un correo electrónico';
	} else if (
		(logInValidated || userValidated) &&
		!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(String(email))
	) {
		errors.email =
			'El correo solo puede contener letras, números, puntos, guiones y guion bajo.';
	}

	if ((logInValidated || changeValidated) && !password) {
		errors.password = 'Por favor ingresa una contraseña';
	}

	if (changeValidated && !code) {
		errors.code = 'Por favor ingresa el código';
	}
	return errors;
}

export default validator;
