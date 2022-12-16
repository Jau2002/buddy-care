import { DATEONLY, INTEGER, STRING, TIME } from 'sequelize';
import sequelize from '../config/db';

const Veterinary = sequelize.define(
	'pfvet_veterinarias',
	{
		id: {
			type: INTEGER,
			primaryKey: true,
			allowNull: false,
		},
		razon: {
			type: STRING,
			allowNull: false,
		},
		responsable: {
			type: STRING,
			allowNull: false,
		},
		provincia: {
			type: STRING,
		},
		localidad: {
			type: STRING,
			allowNull: false,
		},
		direccion: {
			type: STRING,
			allowNull: false,
		},
		telefono: {
			type: STRING,
			allowNull: false,
		},
		facebook: {
			type: STRING,
		},
		instagram: {
			type: STRING,
		},
		descripcion: {
			type: STRING,
		},
		fotos: {
			type: STRING,
		},
		falta: {
			type: DATEONLY,
		},
		halta: {
			type: TIME,
		},
		estado: {
			type: STRING,
		},
		usuario: {
			type: STRING,
		},
		password: {
			type: STRING,
			allowNull: false,
		},
		email: {
			type: STRING,
			allowNull: false,
		},
	},
	{
		timestamps: false,
		freezeTableName: true,
		underscored: true,
	}
);

export default Veterinary;
