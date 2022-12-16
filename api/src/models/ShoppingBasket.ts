import { DATEONLY, INTEGER, STRING, TIME } from 'sequelize';
import sequelize from '../config/db';

const ShoppingBasket = sequelize.define(
	'pfvet_carrito',
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
		id_articulo: {
			type: INTEGER,
			allowNull: false,
		},
		cantidad: {
			type: INTEGER,
			allowNull: false,
		},
		comfav: {
			type: STRING,
		},
		falta: {
			type: DATEONLY,
		},
		halta: {
			type: TIME,
		},
		fvto: {
			type: DATEONLY,
		},
	},
	{
		timestamps: false,
		freezeTableName: true,
		underscored: true,
	}
);

export default ShoppingBasket;
