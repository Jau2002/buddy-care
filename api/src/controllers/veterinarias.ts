import { Request, Response } from 'express';
import { Veterinarias } from "../models/Veterinarias";


export async function getVeterinarias(_:Request, res:Response) {
  console.log("inicio veterinarias");
  try {
    const xVeterinarias = await Veterinarias.findAll({
      attributes: ["id", "razon", "responsable", "provincia", "localidad", "direccion", "telefono", "facebook", "instagram", "descripcion", "fotos", "falta", "halta", "estado", "usuario", "password", "email"]
    });
    res.json(xVeterinarias);
  } catch (error) {
    console.log("error detectado")
    res.status(500).json({
      message: (error as Error).message,
    });
  }
};

export async function createVeterinarias(req:any, res:any) {
  const {id, razon, responsable, provincia, localidad, direccion, telefono, facebook, instagram, descripcion, fotos, falta, halta, estado, usuario, password, email} = req.body;
  try {
    let newVeterinarias = await Veterinarias.create(
      {
        id,
        razon,
        responsable,
        provincia ,
        localidad ,
        direccion ,
        telefono ,
         facebook ,
         instagram ,
         descripcion ,
         fotos ,
         falta,
         halta,
         estado,
         usuario,
         password,
         email,  
      },
      
    );
    return res.json(newVeterinarias);
  } catch (error) {
    res.status(500).json({
      message: (error as Error).message,
    });
  }
  res.json("received");
};

export async function getVeterinaria(req:Request, res:Response) {
  const { id } = req.params;
  try {
    const Veterinaria = await Veterinarias.findOne({
      where: {
        id,
      },
    });
    res.json(Veterinaria);
  } catch (error) {
    res.status(500).json({
      message: (error as Error).message,
    });
  }
};

export const updateVeterinarias = async (req:any, res:any) => {
  try {
    const { id } = req.params;
    const {razon, responsable, provincia, localidad, direccion, telefono, facebook, instagram, descripcion, fotos, falta, halta, estado, usuario, password, email} = req.body;

    const veterinaria: any | null  = await Veterinarias.findByPk(id);
    
veterinaria.razon =razon;
veterinaria.responsable = responsable;
veterinaria.provincia = provincia;
veterinaria.localidad = localidad;
veterinaria.direccion = direccion;
veterinaria.telefono = telefono;
veterinaria.facebook = facebook;
veterinaria.instagram = instagram;
veterinaria.descripcion = descripcion;
veterinaria.fotos = fotos;
veterinaria.falta = falta;
veterinaria.halta = halta;
veterinaria.estado = estado;
veterinaria.usuario = usuario;
veterinaria.password = password;
veterinaria.email = email;  
    
    await veterinaria.save();

    res.json(veterinaria);
  } catch (error) {
    return res.status(500).json({message: (error as Error).message});
  }
};

export async function deleteVeterinaria(req:Request, res:Response) {
  const { id } = req.params;
  try {
    
    await Veterinarias.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({message: (error as Error).message});
  }
};
