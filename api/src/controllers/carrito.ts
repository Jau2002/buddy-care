import { Request, Response } from 'express';
import { Carrito } from "../models/Carrito";


export async function getCarritos(_:Request, res:Response) {
  try {
    const xCarritos = await Carrito.findAll({
      attributes: ["id", "id_cliente", "id_articulo", "cantidad", 	"comfav", "falta", 	"halta", "fvto"]
    });
    res.json(xCarritos);
  } catch (error) {
    console.log("error detectado")
    res.status(404).json({
      message: (error as Error).message,
    });
  }
};

export async function createCarritos(req:any, res:any) {
  const { id, id_cliente, id_articulo, cantidad, 	comfav, falta, 	halta, 	fvto } = req.body;
  try {
    let newCarritos = await Carrito.create(
      {id, id_cliente, id_articulo, cantidad, comfav, falta, halta, fvto});
    return res.json(newCarritos);
  } catch (error) {
    res.status(404).json({
      message: (error as Error).message,
    });
  }
  res.json("received");
};

export async function getCarrito(req:Request, res:Response) {
  const {id} = req.params;
  try {
    const xCarrito = await Carrito.findOne({
      where: {
        id,
      },
    });
    res.json(xCarrito);
  } catch (error) {
    res.status(404).json({
      message: (error as Error).message,
    });
  }
};

export const updateCarritos = async (req:any, res:any) => {
  try {
    const {id} = req.params;
    const {id_cliente, id_articulo, cantidad, comfav, falta, halta, fvto} = req.body;

    const carrito: any | null = await Carrito.findByPk(id);

    carrito.id_cliente = id_cliente;
    carrito.id_articulo = id_articulo;
    carrito.cantidad = cantidad;
    carrito.comfav = comfav;
    carrito.falta = falta;
    carrito.halta = halta;
    carrito.fvto = fvto;

    await carrito.save();

    res.json(carrito);
  } catch (error) {
    return res.status(404).json({message: (error as Error).message});
  }
};

export async function deleteCarrito(req:Request, res:Response) {
  const {id} = req.params;
  try {
    await Carrito.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(200);
  } catch (error) {
    return res.status(404).json({message: (error as Error).message});
  }
};


