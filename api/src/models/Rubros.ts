import { DataTypes } from 'sequelize';
import  sequelize  from '../config/db';


export const Rubros = sequelize.define(
	'pfvet_rubros',
	{
		id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
		descripcion: { type: DataTypes.STRING, allowNull: false },
		foto: { type: DataTypes.STRING, allowNull: false },
		estado: { type: DataTypes.STRING },
	},
	{
		timestamps: false,
	}
);
