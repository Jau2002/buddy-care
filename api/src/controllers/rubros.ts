import { Request, Response } from 'express';
import { Rubros }  from "../models/Rubros";


export async function getRubros(_:Request, res:Response) {
  try {
    const xRubros = await Rubros.findAll({
      attributes: ["id", "descripcion", "foto", "estado"],
    });
    console.log(xRubros)
    res.json(xRubros);
  } catch (error) {
    res.status(404).json({
      message: (error as Error).message,
    });
  }
};

export async function createRubros(req:any, res:any) {
  const {id , descripcion, foto, estado} = req.body;
  try {
    let newRubros = await Rubros.create(
      {
        id,
        descripcion,
        foto,
        estado,
      },
      
    );
    return res.json(newRubros);
  } catch (error) {
    res.status(500).json({
      message: (error as Error).message,
    });
  }
  res.json("received");
};

export async function getRubro(req:Request, res:Response) {
  const { id } = req.params;
  try {
    const rubro = await Rubros.findOne({
      where: {
        id,
      },
    });
    res.json(rubro);
  } catch (error) {
    res.status(500).json({
      message: (error as Error).message,
    });
  }
};

export const updateRubros = async (req:any, res:any) => {
  try {
    const { id } = req.params;
    const {descripcion, foto, estado} = req.body;

    const rubro: any | null  = await Rubros.findByPk(id);
    rubro.descripcion = descripcion;
    rubro.foto = foto;
    rubro.estado = estado;
    await rubro.save();

    res.json(rubro);
  } catch (error) {
    return res.status(500).json({message: (error as Error).message});
  }
};

export async function deleteRubro(req:Request, res:Response) {
  const { id } = req.params;
  try {
    
    await Rubros.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({message: (error as Error).message});
  }
};


