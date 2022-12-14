import { DataTypes } from 'sequelize';
import sequelize from '../config/db';


export const Reviews = sequelize.define(
	'pfvet_reviews',
	{
		id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
		id_cliente: { type: DataTypes.INTEGER, allowNull: false },
		destino: { type: DataTypes.STRING, allowNull: false },
		titulo: { type: DataTypes.STRING, allowNull: false },
		nota: { type: DataTypes.STRING, allowNull: false },
		calificacion: { type: DataTypes.INTEGER, allowNull: false },
		estado: { type: DataTypes.STRING, allowNull: false },
		falta: { type: DataTypes.DATEONLY, allowNull: false },
		halta: { type: DataTypes.TIME },
	},
	{
		timestamps: false,
	}
);
