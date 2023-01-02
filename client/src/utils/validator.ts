import type { Type } from '../components/components';

function validator(
	{
		code,
		country,
		direction,
		email,
		name,
		number,
		password,
		state,
		surname,
	}: Type,
	pathname: string
): Type {
	let errors: Type = {};

	const { logInValidated, userValidated, changeValidated, createValidated } = {
		logInValidated: pathname === '/signIn/',
		userValidated: pathname === '/signIn/user',
		changeValidated: pathname === '/signIn/password',
		createValidated: pathname === '/signUp',
	};

	if ((logInValidated || userValidated || createValidated) && !email) {
		errors.email = 'Por favor ingresa un correo electrónico';
	} else if (
		(logInValidated || userValidated || createValidated) &&
		!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(String(email))
	) {
		errors.email = 'Por favor ingrese un formato del correo valido';
	}

	if ((logInValidated || changeValidated || createValidated) && !password) {
		errors.password = 'Por favor ingresa una contraseña';
	}

	if (changeValidated && !code) {
		errors.code = 'Por favor ingresa el código';
	} else if (changeValidated && !/^[0-9]{6,6}$/g.test(String(code))) {
		errors.code = 'Por favor ingrese un número de 6 dígitos';
	}

	if (createValidated && !surname) {
		errors.surname = 'Por favor ingrese al menos un apellido';
	} else if (createValidated && !/^[A-Za-z\s]+$/g.test(String(surname))) {
		errors.surname = 'Por favor borre números o símbolos';
	}

	if (createValidated && !name) {
		errors.name = 'Por favor ingrese al menos un nombre';
	} else if (createValidated && !/^[A-Za-z\s]+$/g.test(String(name))) {
		errors.name = 'Por favor borre números o símbolos';
	}

	if (createValidated && !country) {
		errors.country = 'Por favor ingrese el país que recide';
	} else if (createValidated && !/^[A-Za-z\s]+$/g.test(String(country))) {
		errors.country = 'Por favor borre números o símbolos';
	}

	if (createValidated && !state) {
		errors.state = 'Por favor ingrese la ubicación donde recide';
	} else if (createValidated && !/^[A-Za-z\s]+$/g.test(String(state))) {
		errors.state = 'Por favor borre números o símbolos';
	}

	if (createValidated && !direction) {
		errors.direction = 'Por favor ingrese la Dirección donde recide';
	}

	if (createValidated && !number) {
		errors.number = 'Por favor ingrese numero';
	} else if (
		createValidated &&
		!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(String(number))
	) {
		errors.number = 'Por favor ingrese ingrese su prefijo y número';
	}

	return errors;
}

export default validator;
