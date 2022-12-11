import { DataTypes } from 'sequelize';
import sequelize from '../config/db';


export const Clientes = sequelize.define(
	'pfvet_clientes',
	{
		id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
		apellido: { type: DataTypes.STRING, allowNull: false },
		nombres: { type: DataTypes.STRING, allowNull: false },
		pais: { type: DataTypes.STRING, allowNull: false },
		localidad: { type: DataTypes.STRING, allowNull: false },
		direccion: { type: DataTypes.STRING, allowNull: false },
		cp: { type: DataTypes.STRING, allowNull: false },
		telefono: { type: DataTypes.STRING },
		email: { type: DataTypes.STRING, allowNull: false },
		usuario: { type: DataTypes.STRING, allowNull: false },
		password: { type: DataTypes.STRING, allowNull: false },
		facebook: { type: DataTypes.STRING },
		instagram: { type: DataTypes.STRING },
		notas_int: { type: DataTypes.STRING },
		falta: { type: DataTypes.DATEONLY, allowNull: false },
		halta: { type: DataTypes.TIME, allowNull: false },
	},
	{
		timestamps: false,
	}
);
