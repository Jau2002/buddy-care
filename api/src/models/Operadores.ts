import { DataTypes } from "sequelize";
import  sequelize  from '../config/db';


export const Operadores = sequelize.define(
	"pfvet_operadores", 
	{
	id  : {type: DataTypes.INTEGER, primaryKey: true, allowNull: false}  ,
	nombre  : { type: DataTypes.STRING},   
	usuario : { type: DataTypes.STRING,  allowNull: false}  ,
	password : {type: DataTypes.STRING, allowNull: false}  ,
	email  : { type: DataTypes.STRING,  allowNull: false}  ,
	rol  : { type:DataTypes.STRING}    ,
	estado : { type: DataTypes.STRING,  allowNull: false}  ,
	falta : {type:DataTypes.DATEONLY , allowNull: false}  ,
	halta  : {type:DataTypes.TIME}    ,
	
   },
   {
    timestamps: false,
   }

);