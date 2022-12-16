import { DATEONLY, INTEGER, STRING, TIME } from 'sequelize';
import sequelize from '../config/db';

const Customer = sequelize.define(
	'pfvet_clientes',
	{
		id: {
			type: INTEGER,
			primaryKey: true,
			allowNull: false,
		},
		apellido: {
			type: STRING,
			allowNull: false,
		},
		nombres: {
			type: STRING,
			allowNull: false,
		},
		pais: {
			type: STRING,
			allowNull: false,
		},
		localidad: {
			type: STRING,
			allowNull: false,
		},
		direccion: {
			type: STRING,
			allowNull: false,
		},
		cp: {
			type: STRING,
			allowNull: false,
		},
		telefono: {
			type: STRING,
		},
		email: {
			type: STRING,
			allowNull: false,
		},
		usuario: {
			type: STRING,
			allowNull: false,
		},
		password: {
			type: STRING,
			allowNull: false,
		},
		facebook: {
			type: STRING,
		},
		instagram: {
			type: STRING,
		},
		notas_int: {
			type: STRING,
		},
		falta: {
			type: DATEONLY,
			allowNull: false,
		},
		halta: {
			type: TIME,
			allowNull: false,
		},
	},
	{
		timestamps: false,
		freezeTableName: true,
		underscored: true,
	}
);

export default Customer;
