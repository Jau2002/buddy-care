import { INTEGER, STRING } from 'sequelize';
import sequelize from '../config/db';

const Category = sequelize.define(
	'pfvet_rubros',
	{
		id: {
			type: INTEGER,
			primaryKey: true,
			allowNull: false,
		},
		descripcion: {
			type: STRING,
			allowNull: false,
		},
		foto: {
			type: STRING,
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

export default Category;
