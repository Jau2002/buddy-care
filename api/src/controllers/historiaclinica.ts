import { Request, Response } from 'express';
import { Historiaclinica }  from "../models/HistoriaClinica";


export async function getHistoriaclinicas(_:Request, res:Response) {
  try {
    const xHistoriaclinicas = await Historiaclinica.findAll({
      attributes: ["id", "id_mascota", "id_veterinario", "nomenclador", "descripcion", "falta", "faccion", "halta", "adjuntos"]
    });
    res.json(xHistoriaclinicas);
  } catch (error) {
    res.status(500).json({
      message: (error as Error).message,
    });
  }
};

export async function createHistoriaclinicas(req:any, res:any) {
  const {id, id_mascota, id_veterinario,  nomenclador, descripcion, falta, faccion, halta, adjuntos} = req.body;
  try {
    let newHistoriaclinicas = await Historiaclinica.create(
      {
        id,
        id_mascota,
        id_veterinario, 
         nomenclador,
         descripcion,
         falta, 
         faccion,
        halta,
        adjuntos,  
      },
      
    );
    return res.json(newHistoriaclinicas);
  } catch (error) {
    res.status(500).json({
      message: (error as Error).message,
    });
  }
  res.json("received");
};

export async function getHistoriaclinica(req:Request, res:Response) {
  const { id } = req.params;
  try {
    const xHistoriaclinica = await Historiaclinica.findOne({
      where: {
        id,
      },
    });
    res.json(xHistoriaclinica);
  } catch (error) {
    res.status(500).json({
      message: (error as Error).message,
    });
  }
};

export const updateHistoriaclinicas = async (req:any, res:any) => {
  try {
    const { id } = req.params;
    const {id_mascota ,id_veterinario,  nomenclador, descripcion, falta, faccion, halta, adjuntos} = req.body;

    const historiaclinica: any | null = await Historiaclinica.findByPk(id);
   
    historiaclinica.id_mascota = id_mascota;
    historiaclinica.id_veterinario = id_veterinario;
    historiaclinica.nomenclador = nomenclador;
    historiaclinica.descripcion = descripcion;
    historiaclinica.falta = falta;
    historiaclinica.faccion = faccion;
    historiaclinica.halta = halta; 
    historiaclinica.adjuntos = adjuntos;
    
    await historiaclinica.save();

    res.json(historiaclinica);
  } catch (error) {
    return res.status(500).json({message: (error as Error).message});
  }
};

export async function deleteHistoriaclinica(req:Request, res:Response) {
  const { id } = req.params;
  try {
    await Historiaclinica.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({message: (error as Error).message});
  }
};


