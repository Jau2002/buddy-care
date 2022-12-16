import { DATEONLY, DECIMAL, INTEGER, STRING, TIME } from 'sequelize';
import sequelize from '../config/db';

const Article = sequelize.define(
	'pfvet_articulos',
	{
		id: {
			type: INTEGER,
			primaryKey: true,
			allowNull: false,
		},
		nombre: {
			type: STRING,
			allowNull: false,
		},
		rubro: {
			type: INTEGER,
			allowNull: false,
		},
		descripcion: {
			type: STRING,
			allowNull: false,
		},
		fotos: {
			type: STRING,
		},
		id_vet: {
			type: INTEGER,
			allowNull: false,
		},
		precio: {
			type: DECIMAL,
			allowNull: false,
		},
		stock: {
			type: INTEGER,
			allowNull: false,
		},
		ptoped: {
			type: INTEGER,
			allowNull: false,
		},
		ptovta: {
			type: INTEGER,
			allowNull: false,
		},
		overstock: {
			type: STRING,
		},
		evento: {
			type: STRING,
		},
		falta: {
			type: DATEONLY,
			allowNull: false,
		},
		halta: {
			type: TIME,
			allowNull: false,
		},
		fmodif: {
			type: DATEONLY,
			allowNull: false,
		},
		hmodif: {
			type: TIME,
			allowNull: false,
		},
		id_operador: {
			type: INTEGER,
			allowNull: false,
		},
		estado: {
			type: STRING,
		},
	},
	{
		timestamps: false,
		freezeTableName: true,
		underscored: true,
	}
);

export default Article;
