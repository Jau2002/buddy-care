import { DataTypes } from 'sequelize';
import  sequelize  from '../config/db';


export const Veterinarios = sequelize.define(
	'pfvet_veterinarios',
	{
		id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
		nombre: { type: DataTypes.STRING, allowNull: false },
		nota: { type: DataTypes.STRING },
		telefono: { type: DataTypes.STRING },
		email: { type: DataTypes.STRING },
		falta: { type: DataTypes.DATEONLY },
		halta: { type: DataTypes.TIME },
	},
	{
		timestamps: false,
	}
);
