import { DATEONLY, INTEGER, STRING, TIME } from 'sequelize';
import sequelize from '../config/db';

const Vet = sequelize.define(
	'pfvet_veterinarios',
	{
		id: {
			type: INTEGER,
			primaryKey: true,
			allowNull: false,
		},
		nombre: {
			type: STRING,
			allowNull: false,
		},
		nota: {
			type: STRING,
		},
		telefono: {
			type: STRING,
		},
		email: {
			type: STRING,
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

export default Vet;
