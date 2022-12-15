import type { Type } from '../components/components';

function validator({ email, password, code }: Type): Type {
	let errors: Type = {};
	if (!email) {
		errors.email = 'Por favor ingresa un correo electrónico';
	} else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)) {
		errors.email =
			'El correo solo puede contener letras, números, puntos, guiones y guion bajo.';
	}
	if (!password) {
		errors.password = 'Por favor ingresa una contraseña';
	}
	if (!code) {
		errors.code = 'Por favor ingresa el código';
	}
	return errors;
}

export default validator;
