import { DataTypes } from 'sequelize';
import sequelize from '../config/db';

export const Commerces = sequelize.define(
	'pfvet_commerces',
	{
		id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
		id_cliente: { type: DataTypes.INTEGER, allowNull: false },
		id_articulo: { type: DataTypes.INTEGER, allowNull: false },
		tipo: { type: DataTypes.STRING, allowNull: false },
		detalle: { type: DataTypes.STRING, allowNull: false },
		fecha: { type: DataTypes.DATEONLY, allowNull: false },
		comprobante: { type: DataTypes.INTEGER, allowNull: false },
		importe: { type: DataTypes.DECIMAL, allowNull: false },
		mediopago: { type: DataTypes.STRING, allowNull: false },
		cuota: { type: DataTypes.INTEGER, allowNull: false },
		decuota: { type: DataTypes.INTEGER, allowNull: false },
		falta: { type: DataTypes.DATEONLY, allowNull: false },
		halta: { type: DataTypes.TIME },
	},
	{
		timestamps: false,
	}
);
