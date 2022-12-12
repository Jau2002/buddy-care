import { Request, Response } from 'express';
import { Clientes } from "../models/Clientes";


export async function getClientes(_:Request, res:Response) {
  console.log("inicio clientes");
  try {
    const xClientes = await Clientes.findAll({
      attributes: ["id" , "apellido",	"nombres", "pais", "localidad", "direccion", "cp", "telefono", "email", "usuario", "password", "facebook", "instagram" , "notas_int" , "falta", "halta"],
    });
    res.json(xClientes);
  } catch (error) {
    console.log("error detectado")
    res.status(500).json({
      message: (error as Error).message,
    });
  }
}

export async function createClientes(req:any, res:any) {
  const { id , apellido,	nombres, pais, localidad, direccion, cp, telefono, email, usuario, password, facebook, instagram , notas_int , falta, halta } = req.body;
 
 
  try {
    let newClientes = await Clientes.create(
      {
        id , 
        apellido,
        nombres,
        pais,
        localidad,
        direccion,
        cp,
        telefono,
        email,
        usuario,
        password,
        facebook,
        instagram,
        notas_int,
        falta,
        halta
        
      },
      
    );
    return res.json(newClientes);
  } catch (error) {
    res.status(500).json({
      message: (error as Error).message,
    });
  }
  res.json("received");
}





export async function getCliente(req:Request, res:Response) {
  const { id } = req.params;
  try {
    const Cliente = await Clientes.findOne({
      where: {
        id,
      },
    });
    res.json(Cliente);
  } catch (error) {
    res.status(500).json({
      message: (error as Error).message,
    });
  }
}

export const updateClientes = async (req:any, res:any) => {
  try {
    const { id } = req.params;
    const { apellido,	nombres, pais, localidad, direccion, cp, telefono, email, usuario, password, facebook, instagram , notas_int , falta, halta } = req.body;

    const clientes: any | null = await Clientes.findByPk(id);
    
    
    
clientes.apellido=apellido;
clientes.nombres=nombres;
clientes.pais=pais;
clientes.localidad=localidad;
clientes.direccion=direccion;
clientes.cp=cp;
clientes.telefono=telefono;
clientes.email=email;
clientes.usuario=usuario;
clientes.password=password;
clientes.facebook=facebook;
clientes.instagram=instagram;
clientes.notas_int=notas_int;
clientes.falta=falta;
clientes.halta=halta;
    
    await clientes.save();

    res.json(clientes);
  } catch (error) {
    return res.status(500).json({message: (error as Error).message});
  }
};

export async function deleteCliente(req:Request, res:Response) {
  const { id } = req.params;
  try {
    
    await Clientes.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({message: (error as Error).message});
  }
}


