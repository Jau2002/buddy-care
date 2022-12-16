import { DATEONLY, INTEGER, STRING, TIME } from 'sequelize';
import sequelize from '../config/db';

const Pet = sequelize.define(
	'pfvet_mascotas',
	{
		id: {
			type: INTEGER,
			primaryKey: true,
			allowNull: false,
		},
		id_cliente: {
			type: INTEGER,
			allowNull: false,
		},
		nombre: {
			type: STRING,
			allowNull: false,
		},
		especie: {
			type: STRING,
			allowNull: false,
		},
		raza: {
			type: STRING,
			allowNull: false,
		},
		edad: {
			type: INTEGER,
			allowNull: false,
		},
		peso: {
			type: INTEGER,
		},
		estado: {
			type: STRING,
			allowNull: false,
		},
		id_madre: {
			type: INTEGER,
		},
		id_padre: {
			type: INTEGER,
		},
		adjuntos: {
			type: STRING,
		},
		nota: {
			type: STRING,
		},
		chip: {
			type: INTEGER,
		},
		falta: {
			type: DATEONLY,
		},
		halta: {
			type: TIME,
		},
	},
	{
		timestamps: false,
		freezeTableName: true,
		underscored: true,
	}
);

export default Pet;
