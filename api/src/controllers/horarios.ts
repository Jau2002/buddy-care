import { Request, Response } from 'express';
import { Horarios } from "../models/Horarios";


export async function getHorarios(_:Request, res:Response) {
  try {
    const xHorarios = await Horarios.findAll({
      attributes: ["id", "id_veterinario", "fechaguardia", "descripcion", "falta","halta"]});
    res.json(xHorarios);
  } catch (error) {
    console.log("error detectado")
    res.status(404).json({
      message: (error as Error).message,
    });
  }
};

export async function createHorarios(req:any, res:any) {
  const {id ,id_veterinario,	fechaguardia,descripcion,falta ,halta  } = req.body;
  try {
    let newHorarios = await Horarios.create(
      {id, id_veterinario, fechaguardia, descripcion, falta, halta});
    return res.json(newHorarios);
  } catch (error) {
    res.status(404).json({
      message: (error as Error).message,
    });
  }
  res.json("received");
};

export async function getHorario(req:Request, res:Response) {
  const {id} = req.params;
  try {
    const Horario = await Horarios.findOne({
      where: {
        id,
      },
    });
    res.json(Horario);
  } catch (error) {
    res.status(404).json({
      message: (error as Error).message,
    });
  }
};

export const updateHorarios = async (req:any, res:any) => {
  try {
    const {id} = req.params;
    const {id_veterinario, fechaguardia, descripcion, falta, halta} = req.body;

    const horario: any | null = await Horarios.findByPk(id);

    horario.id = id;
    horario.id_veterinario = id_veterinario;
    horario.fechaguardia = fechaguardia;
    horario.descripcion = descripcion;
    horario.falta = falta;
    horario.halta = halta;
    
    await horario.save();

    res.json(horario);
  } catch (error) {
    return res.status(404).json({message: (error as Error).message});
  }
};

export async function deleteHorario(req:Request, res:Response) {
  const { id } = req.params;
  try {
    await Horarios.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).json({message: (error as Error).message});
  }
};


