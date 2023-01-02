import type { Attributes } from './utils';

export const logIn: Attributes[] = [
	{
		type: 'email',
		placeholder: 'Correo electrónico',
		name: 'email',
		display: 'Correo',
	},
	{
		type: 'password',
		placeholder: 'Contraseña segura',
		name: 'password',
		display: 'Contraseña',
	},
];

export const email: Attributes[] = [
	{
		type: 'email',
		placeholder: 'Correo electrónico',
		name: 'email',
		display: 'Correo verificación',
	},
];

export const passwords: Attributes[] = [
	{
		type: 'text',
		placeholder: '152483',
		name: 'code',
		display: 'Código de verificación',
	},
	{
		type: 'password',
		placeholder: 'Contraseña segura',
		name: 'password',
		display: 'Nueva contraseña',
	},
];

export const signUp: Attributes[] = [
	{
		type: 'text',
		placeholder: 'Apellido dueño',
		name: 'surname',
		display: 'Apellidos',
	},
	{
		type: 'text',
		placeholder: 'Nombre dueño',
		name: 'name',
		display: 'Nombres',
	},
	{
		type: 'text',
		placeholder: 'País',
		name: 'country',
		display: 'País',
	},
	{
		type: 'text',
		placeholder: 'Ubicación',
		name: 'state',
		display: 'Localidad / Comunidad / Ciudad',
	},
	{
		type: 'text',
		placeholder: 'Residencia',
		name: 'direction',
		display: 'Dirección',
	},
	{
		type: 'text',
		placeholder: 'Numero',
		name: 'number',
		display: 'Teléfono / Movil',
	},
	{
		type: 'email',
		placeholder: 'Correo electrónico',
		name: 'email',
		display: 'Correo',
	},
	{
		type: 'password',
		placeholder: 'Contraseña segura',
		name: 'password',
		display: 'Contraseña',
	},
];
