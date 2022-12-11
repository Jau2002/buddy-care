import { Request, Response } from 'express';
import { Veterinarios } from "../models/Veterinarios";


export async function getVeterinarios(_:Request, res:Response) {
  try {
    const xVeterinarios = await Veterinarios.findAll({
      attributes: ["id", "nombre", "nota", "telefono", "email", "falta", "halta"]
    });
    res.json(xVeterinarios);
  } catch (error) {
    res.status(500).json({
      message: (error as Error).message,
    });
  }
};

export async function createVeterinarios(req:any, res:any) {
  const {id, nombre, nota, telefono, email, falta, halta} = req.body;
  try {
    let newVeterinarios = await Veterinarios.create(
      {
        id ,
        nombre,
        nota ,
        telefono,
        email,
        falta,
        halta,
      },
      
    );
    return res.json(newVeterinarios);
  } catch (error) {
    res.status(500).json({
      message: (error as Error).message,
    });
  }
  res.json("received");
};

export async function getVeterinario(req:Request, res:Response) {
  const { id } = req.params;
  try {
    const Veterinario = await Veterinarios.findOne({
      where: {
        id,
      },
    });
    res.json(Veterinario);
  } catch (error) {
    res.status(500).json({
      message: (error as Error).message,
    });
  }
};

export const updateVeterinarios = async (req:any, res:any) => {
  try {
    const { id } = req.params;
    const {nombre, nota, telefono, email, falta, halta} = req.body;

    const veterinario: any | null  = await Veterinarios.findByPk(id);
    
    veterinario.nombre = nombre;
    veterinario.nota = nota;
    veterinario.telefono = telefono;
    veterinario.email = email;
    veterinario.falta = falta;
    veterinario.halta = halta;
    
    await veterinario.save();

    res.json(veterinario);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

export async function deleteVeterinario(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await Veterinarios.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({message: (error as Error).message});
  }
};
