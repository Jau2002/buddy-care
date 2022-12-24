import { DATEONLY, INTEGER, STRING, TIME } from 'sequelize';
import sequelize from '../config/db';

const Schedule = sequelize.define(
	'pfvet_horarios',
	{
		id: {
			type: INTEGER,
			primaryKey: true,
			allowNull: false,
		},
		id_veterinario: {
			type: INTEGER,
			allowNull: false,
		},
		fechaguardia: {
			type: DATEONLY,
			allowNull: false,
		},
		descripcion: {
			type: STRING,
		},
		falta: {
			type: DATEONLY,
			allowNull: false,
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

export default Schedule;
