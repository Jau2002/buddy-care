import type { Attributes } from './utils';

export const logIn: Attributes[] = [
	{
		type: 'email',
		placeholder: 'manolo@gmail.com',
		name: 'email',
		display: 'Correo',
	},
	{
		type: 'password',
		placeholder: 'Tu contraseña',
		name: 'password',
		display: 'Contraseña',
	},
];

export const email: Attributes[] = [
	{
		type: 'email',
		placeholder: 'fulano@gmail.com',
		name: 'email',
		display: 'Correo verificación',
	},
];

export const passwords: Attributes[] = [
	{
		type: 'text',
		placeholder: '15483',
		name: 'code',
		display: 'Código de verificación',
	},
	{
		type: 'password',
		placeholder: 'contraseña',
		name: 'password',
		display: 'Nueva contraseña',
	},
];
