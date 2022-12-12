import { Request, Response } from 'express';
import { Clientes } from "../models/Clientes";


export async function getClientes(_:Request, res:Response) {
  try {
    const xClientes = await Clientes.findAll({
      attributes: ["id" , "apellido",	"nombres", "pais", "localidad", "direccion", "cp", "telefono", "email", "usuario", "password", "facebook", "instagram" , "notas_int" , "falta", "halta"],
    });
    res.json(xClientes);
  } catch (error) {
    res.status(404).json({
      message: (error as Error).message,
    });
  }
};

export async function createClientes(req:any, res:any) {
  const {id, apellido, nombres, pais, localidad, direccion, cp, telefono, email, usuario, password, facebook, instagram, notas_int, falta, halta} = req.body;
  try {
    let newClientes = await Clientes.create(
      {id, apellido, nombres, pais, localidad, direccion, cp, telefono, email, usuario, password, facebook, instagram, notas_int, falta, halta});
    return res.json(newClientes);
  } catch (error) {
    res.status(404).json({
      message: (error as Error).message,
    });
  }
  res.json("received");
};

export async function getCliente(req:Request, res:Response) {
  const {id} = req.params;
  try {
    const Cliente = await Clientes.findOne({
      where: {
        id,
      },
    });
    res.json(Cliente);
  } catch (error) {
    res.status(404).json({
      message: (error as Error).message,
    });
  }
};

export const updateClientes = async (req:any, res:any) => {
  try {
    const { id } = req.params;
    const { apellido,	nombres, pais, localidad, direccion, cp, telefono, email, usuario, password, facebook, instagram , notas_int , falta, halta } = req.body;

    const clientes: any | null = await Clientes.findByPk(id);
    
    clientes.nombres = nombres;
    clientes.apellido = apellido;
    clientes.localidad = localidad;
    clientes.pais = pais;
    clientes.cp =cp;
    clientes.direccion = direccion;
    clientes.email = email;
    clientes.telefono = telefono;
    clientes.password = password;
    clientes.usuario = usuario;
    clientes.instagram = instagram;
    clientes.facebook = facebook;
    clientes.falta = falta;
    clientes.notas_int = notas_int;
    clientes.halta = halta;
    
    await clientes.save();

    res.json(clientes);
  } catch (error) {
    return res.status(404).json({message: (error as Error).message});
  }
};

export async function deleteCliente(req:Request, res:Response) {
  const {id} = req.params;
  try {
    
    await Clientes.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(200);
  } catch (error) {
    return res.status(404).json({message: (error as Error).message});
  }
};


