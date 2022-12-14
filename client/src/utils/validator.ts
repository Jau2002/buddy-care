import type { Type } from '../pages/pages';

function validator({ email }: Type): Type {
	let errors: Type = {};
	if (!email) {
		errors.email = 'Por favor ingresa un correo electrónico';
	} else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)) {
		errors.email =
			'El correo solo puede contener letras, números, puntos, guiones y guion bajo.';
	}
	return errors;
}

export default validator;
