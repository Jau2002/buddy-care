import type { Attributes } from './utils';

export const logIn: Attributes[] = [
	{
		id: 1,
		type: 'email',
		placeholder: 'example@gmail.com',
		name: 'email',
		display: 'Correo',
	},
	{
		id: 2,
		type: 'password',
		placeholder: 'Password 123',
		name: 'password',
		display: 'Contraseña',
	},
];

export const email: Attributes[] = [
	{
		id: 3,
		type: 'email',
		placeholder: 'example@gmail.com',
		name: 'email',
		display: 'Correo verificación',
	},
];

export const passwords: Attributes[] = [
	{
		id: 4,
		type: 'text',
		placeholder: '15483',
		name: 'code',
		display: 'Código de verificación',
	},
	{
		id: 5,
		type: 'password',
		placeholder: 'contraseña',
		name: 'password',
		display: 'Nueva contraseña',
	},
];
