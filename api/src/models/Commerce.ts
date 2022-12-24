import { DATEONLY, DECIMAL, INTEGER, STRING, TIME } from 'sequelize';
import sequelize from '../config/db';

const Commerce = sequelize.define(
	'pfvet_commerces',
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
		tipo: {
			type: STRING,
			allowNull: false,
		},
		detalle: {
			type: STRING,
			allowNull: false,
		},
		fecha: {
			type: DATEONLY,
			allowNull: false,
		},
		comprobante: {
			type: INTEGER,
			allowNull: false,
		},
		importe: {
			type: DECIMAL,
			allowNull: false,
		},
		mediopago: {
			type: STRING,
			allowNull: false,
		},
		cuota: {
			type: INTEGER,
			allowNull: false,
		},
		decuota: {
			type: INTEGER,
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

export default Commerce;
