import { DATEONLY, INTEGER, STRING, TIME } from 'sequelize';
import sequelize from '../config/db';

const Operator = sequelize.define(
	'pfvet_operadores',
	{
		id: {
			type: INTEGER,
			primaryKey: true,
			allowNull: false,
		},
		nombre: {
			type: STRING,
		},
		usuario: {
			type: STRING,
			allowNull: false,
		},
		password: {
			type: STRING,
			allowNull: false,
		},
		email: {
			type: STRING,
			allowNull: false,
		},
		rol: {
			type: STRING,
		},
		estado: {
			type: STRING,
			allowNull: false,
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

export default Operator;
