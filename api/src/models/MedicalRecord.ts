import { DATEONLY, INTEGER, STRING, TIME } from 'sequelize';
import sequelize from '../config/db';

const MedicalRecord = sequelize.define(
	'pfvet_historia_clinica',
	{
		id: {
			type: INTEGER,
			primaryKey: true,
			allowNull: false,
		},
		id_mascota: {
			type: INTEGER,
			allowNull: false,
		},
		id_veterinario: {
			type: INTEGER,
		},
		nomenclador: {
			type: STRING,
			allowNull: false,
		},
		descripcion: {
			type: STRING,
			allowNull: false,
		},
		falta: {
			type: DATEONLY,
		},
		faccion: {
			type: DATEONLY,
			allowNull: false,
		},
		halta: {
			type: TIME,
		},
		adjuntos: {
			type: STRING,
		},
	},
	{
		timestamps: false,
		freezeTableName: true,
		underscored: true,
	}
);

export default MedicalRecord;
