import { Request, Response } from 'express';
import { Reviews } from "../models/Reviews";


export async function getReviews(_:Request, res:Response) {
  try {
    const xReviews = await Reviews.findAll({
      attributes: ["id", "id_cliente", "destino", "titulo", "nota", "calificacion", "estado", "falta", "halta"]});
    res.json(xReviews);
  } catch (error) {
    res.status(500).json({
      message: (error as Error).message,
    });
  }
};

export async function createReviews(req:any, res:any) {
  const {id, id_cliente, destino, titulo,	nota, calificacion, estado, falta, halta} = req.body;
  try {
    let newReviews = await Reviews.create(
      {id, id_cliente, destino, titulo, nota, calificacion, estado, falta, halta});
    return res.json(newReviews);
  } catch (error) {
    res.status(404).json({
      message: (error as Error).message,
    });
  }
  res.json("received");
};

export async function getReview(req:Request, res:Response) {
  const {id} = req.params;
  try {
    const Review = await Reviews.findOne({
      where: {
        id,
      },
    });
    res.json(Review);
  } catch (error) {
    res.status(404).json({
      message: (error as Error).message,
    });
  }
};

export const updateReviews = async (req:any, res:any) => {
  try {
    const {id} = req.params;
    const {id_cliente, destino, titulo,	nota, calificacion, estado, falta, halta} = req.body;

    const review: any | null = await Reviews.findByPk(id);
    review.id_cliente = id_cliente;
    review.destino = destino;
    review.titulo = titulo;
    review.nota = nota;
    review.calificacion = calificacion;
    review.estado = estado;
    review.falta = falta;
    review.halta = halta;     
    await review.save();

    res.json(review);
  } catch (error) {
    return res.status(404).json({message: (error as Error).message});
  }
};

export async function deleteReview(req:Request, res:Response) {
  const { id } = req.params;
  try {
    await Reviews.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(200);
  } catch (error) {
    return res.status(404).json({message: (error as Error).message});
  }
}

