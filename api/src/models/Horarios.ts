import { DataTypes } from 'sequelize';
import sequelize from '../config/db';


export const Horarios = sequelize.define(
	'pfvet_horarios',
	{
		id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
		id_veterinario: { type: DataTypes.INTEGER, allowNull: false },
		fechaguardia: { type: DataTypes.DATEONLY, allowNull: false },
		descripcion: { type: DataTypes.STRING },
		falta: { type: DataTypes.DATEONLY, allowNull: false },
		halta: { type: DataTypes.TIME },
	},
	{
		timestamps: false,
	}
);
