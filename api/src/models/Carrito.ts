import { DataTypes } from 'sequelize';
import sequelize from '../config/db';


export const Carrito = sequelize.define(
	'pfvet_carrito',
	{
		id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
		id_cliente: { type: DataTypes.INTEGER, allowNull: false },
		id_articulo: { type: DataTypes.INTEGER, allowNull: false },
		comfav: { type: DataTypes.STRING },
		falta: { type: DataTypes.DATEONLY },
		halta: { type: DataTypes.TIME },
		fvto: { type: DataTypes.DATEONLY },
	},
	{
		timestamps: false,
	}
);
