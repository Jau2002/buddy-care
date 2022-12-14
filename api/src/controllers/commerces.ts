import { Request, Response } from 'express';
import { Commerces } from "../models/Commerces";


export async function getCommerces(_:Request, res:Response) {
  try {
    const xCommerces = await Commerces.findAll({
      attributes: ["id", "id_cliente", "id_articulo", "tipo", "detalle", "fecha", "comprobante", "importe", "mediopago", "cuota", "decuota", "falta", "halta"]});
    res.json(xCommerces);
  } catch (error) {
    res.status(404).json({
      message: (error as Error).message,
    });
  }
};

export async function createCommerces(req:any, res:any) {
  const {id, id_cliente, id_articulo, tipo, detalle, fecha, comprobante, importe, mediopago, cuota, decuota, falta, halta} = req.body;
  try {
    let newCommerces = await Commerces.create(
      {id, id_cliente, id_articulo, tipo, detalle, fecha, comprobante, importe, mediopago, cuota, decuota, falta, halta});
    return res.json(newCommerces);
  } catch (error) {
    res.status(404).json({
      message: (error as Error).message,
    });
  }
  res.json("received");
};

export async function getCommerce(req:Request, res:Response) {
  const {id} = req.params;
  try {
    const Commerce = await Commerces.findOne({
      where: {
        id,
      },
    });
    res.json(Commerce);
  } catch (error) {
    res.status(404).json({
      message: (error as Error).message,
    });
  }
};

export const updateCommerces = async (req:any, res:any) => {
  try {
    const {id} = req.params;
    const {id_cliente, id_articulo, tipo, detalle, fecha,	comprobante, importe, mediopago, cuota, decuota, falta, halta} = req.body;

    const commerce: any | null = await Commerces.findByPk(id);

    commerce.id_cliente = id_cliente;
    commerce.tipo = tipo;
    commerce.id_articulo = id_articulo;
    commerce.fecha = fecha;
    commerce.detalle = detalle;
    commerce.importe = importe;
    commerce.comprobante = comprobante;
    commerce.cuota = cuota;
    commerce.mediopago = mediopago;
    commerce.falta = falta;
    commerce.decuota = decuota;
    commerce.halta = halta;

    await commerce.save();

    res.json(commerce);
  } catch (error) {
    return res.status(404).json({message: (error as Error).message});
  }
};

export async function deleteCommerce(req:Request, res:Response) {
  const {id} = req.params;
  try {
    await Commerces.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(200);
  } catch (error) {
    return res.status(404).json({message: (error as Error).message});
  }
};

