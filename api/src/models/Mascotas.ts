import { DataTypes } from 'sequelize';
import  sequelize  from '../config/db';


export const Mascotas = sequelize.define(
	'pfvet_mascotas',
	{
		id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
		id_cliente: { type: DataTypes.INTEGER, allowNull: false },
		nombre: { type: DataTypes.STRING, allowNull: false },
		especie: { type: DataTypes.STRING, allowNull: false },
		raza: { type: DataTypes.STRING, allowNull: false },
		edad: { type: DataTypes.INTEGER, allowNull: false },
		peso: { type: DataTypes.INTEGER },
		estado: { type: DataTypes.STRING, allowNull: false },
		id_madre: { type: DataTypes.INTEGER },
		id_padre: { type: DataTypes.INTEGER },
		adjuntos: { type: DataTypes.STRING },
		nota: { type: DataTypes.STRING },
		chip: { type: DataTypes.INTEGER },
		falta: { type: DataTypes.DATEONLY },
		halta: { type: DataTypes.TIME },
	},
	{
		timestamps: false,
	}
);
