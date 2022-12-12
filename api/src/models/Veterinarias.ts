import { DataTypes } from 'sequelize';
import  sequelize  from '../config/db';


export const Veterinarias = sequelize.define(
	'pfvet_veterinarias',
	{
		id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
		razon: { type: DataTypes.STRING, allowNull: false },
		responsable: { type: DataTypes.STRING, allowNull: false },
		provincia: { type: DataTypes.STRING },
		localidad: { type: DataTypes.STRING, allowNull: false },
		direccion: { type: DataTypes.STRING, allowNull: false },
		telefono: { type: DataTypes.STRING, allowNull: false },
		facebook: { type: DataTypes.STRING },
		instagram: { type: DataTypes.STRING },
		descripcion: { type: DataTypes.STRING },
		fotos: { type: DataTypes.STRING },
		falta: { type: DataTypes.DATEONLY },
		halta: { type: DataTypes.TIME },
		estado: { type: DataTypes.STRING },
		usuario: { type: DataTypes.STRING },
		password: { type: DataTypes.STRING, allowNull: false },
		email: { type: DataTypes.STRING, allowNull: false },
	},
	{
		timestamps: false,
	}
);
