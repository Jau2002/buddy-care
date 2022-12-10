import { Request, Response } from 'express';
import { Operadores } from "../models/Operadores";


export async function getOperadors(_:Request, res:Response) {
  try {
    const xOperadors = await Operadores.findAll({
      attributes: ["id",	"nombre", 	"usuario", 	"password",	"email", "rol", "estado", "falta", "halta"]
    });
    res.json(xOperadors);
  } catch (error) {
    res.status(404).json({
      message: (error as Error).message,
    });
  }
};

export async function createOperadors(req:any, res:any) {
  const {id,	nombre , 	usuario, 	password, 	email, 	rol, 	estado, 	falta, 	halta} = req.body;
  try {
    let newOperadors = await Operadores.create(
      {
        id,
        nombre,
        usuario,
        password,
        email,
        rol,
        estado,
        falta,
        halta,  
      },
      
    );
    return res.json(newOperadors);
  } catch (error) {
    res.status(404).json({
      message: (error as Error).message,
    });
  }
  res.json("received");
};

export async function getOperador(req:Request, res:Response) {
  const { id } = req.params;
  try {
    const Operador = await Operadores.findOne({
      where: {
        id,
      },
    });
    res.json(Operador);
  } catch (error) {
    res.status(404).json({
      message: (error as Error).message,
    });
  }
}

export const updateOperadors = async (req:any, res:any) => {
  try {
    const { id } = req.params;
    const {nombre, usuario, password, email, rol, estado, falta, halta} = req.body;

    const operador: any | null = await Operadores.findByPk(id);
    

  operador.nombre=nombre;
	operador.usuario=usuario;
	operador.password=password;
	operador.email=email;
	operador.rol=rol;
	operador.estado=estado;
	operador.falta=falta;
	operador.halta=halta;  

    await operador.save();

    res.json(operador);
  } catch (error) {
    return res.status(404).json({ message: (error as Error).message });
  }
};

export async function deleteOperador(req:Request, res:Response) {
  const { id } = req.params;
  try {
    
    await Operadores.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(200);
  } catch (error) {
    return res.status(404).json({  message: (error as Error).message });
  }
};


