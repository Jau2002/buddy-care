import { DATEONLY, INTEGER, STRING, TIME } from 'sequelize';
import sequelize from '../config/db';

const Review = sequelize.define(
	'pfvet_reviews',
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
		destino: {
			type: STRING,
			allowNull: false,
		},
		titulo: {
			type: STRING,
			allowNull: false,
		},
		nota: {
			type: STRING,
			allowNull: false,
		},
		calificacion: {
			type: INTEGER,
			allowNull: false,
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

export default Review;
