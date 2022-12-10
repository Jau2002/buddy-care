import { DataTypes } from 'sequelize';
import  sequelize  from '../config/db';

export const Historiaclinica = sequelize.define(
	'pfvet_historia_clinica',
	{
		id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
		id_mascota: { type: DataTypes.INTEGER, allowNull: false },
		id_veterinario: { type: DataTypes.INTEGER },
		nomenclador: { type: DataTypes.STRING, allowNull: false },
		descripcion: { type: DataTypes.STRING, allowNull: false },
		falta: { type: DataTypes.DATEONLY },
		faccion: { type: DataTypes.DATEONLY, allowNull: false },
		halta: { type: DataTypes.TIME },
		adjuntos: { type: DataTypes.STRING },
	},
	{
		timestamps: false,
	}
);
