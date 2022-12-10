import { DataTypes } from 'sequelize';
import sequelize from '../config/db';


export const Articulos = sequelize.define(
	'pfvet_articulos',
	{
		id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
		nombre: { type: DataTypes.STRING, allowNull: false },
		rubro: { type: DataTypes.INTEGER, allowNull: false },
		descripcion: { type: DataTypes.STRING, allowNull: false },
		fotos: { type: DataTypes.STRING },
		id_vet: { type: DataTypes.INTEGER, allowNull: false },
		precio: { type: DataTypes.DECIMAL, allowNull: false },
		evento: { type: DataTypes.STRING },
		falta: { type: DataTypes.DATEONLY, allowNull: false },
		halta: { type: DataTypes.TIME, allowNull: false },
		fmodif: { type: DataTypes.DATEONLY, allowNull: false },
		hmodif: { type: DataTypes.TIME, allowNull: false },
		id_operador: { type: DataTypes.INTEGER, allowNull: false },
		estado: { type: DataTypes.STRING },
	},
	{
		timestamps: false,
	}
);
