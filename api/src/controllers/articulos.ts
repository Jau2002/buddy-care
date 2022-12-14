import { Request, Response } from 'express';
import { Articulos } from "../models/Articulos";


export async function getArticulos(_:Request, res:Response) {
  try {
    const xArticulos = await Articulos.findAll({
      attributes: ["id", "nombre", "rubro", "descripcion", "fotos", "id_vet", "precio", "stock", "ptoped", "ptovta", "overstock", "evento", "falta", "halta", "fmodif", "hmodif", "id_operador", "estado"]});
    res.json(xArticulos);
  } catch (error) {
    res.status(404).json({
      message: (error as Error).message,
    });
  }
};

export async function createArticulos(req:any, res:any) {
  const {id, nombre, rubro, descripcion, fotos, id_vet,	precio, stock, ptoped, ptovta, overstock, evento, falta, halta,	fmodif, hmodif,	id_operador, estado} = req.body;
  try {
    let newArticulos = await Articulos.create(
      {id, nombre, rubro, descripcion, fotos, id_vet, precio, stock, ptoped, ptovta, overstock, evento, falta, halta, fmodif, hmodif, id_operador, estado});
    return res.json(newArticulos);
  } catch (error) {
    res.status(404).json({
      message: (error as Error).message,
    });
  }
  res.json("received");
};

export async function getArticulo(req:Request, res:Response) {
  const {id} = req.params;
  try {
    const Articulo = await Articulos.findOne({
      where: {
        id,
      },
    });
    res.json(Articulo);
  } catch (error) {
    res.status(404).json({
      message: (error as Error).message,
    });
  }
};

export const updateArticulos = async (req:any, res:any) => {
  try {
    const {id} = req.params;
    const {nombre, rubro, descripcion, fotos, id_vet,	precio, stock, ptoped, ptovta, overstock, evento, falta,	halta, fmodif, hmodif, id_operador, estado} = req.body;

    const articulos: any | null = await Articulos.findByPk(id);
    
    articulos.nombre = nombre;
    articulos.descripcion = descripcion;
    articulos.rubro = rubro;
    articulos.id_vet = id_vet;
    articulos.fotos = fotos;
    articulos.stock = stock;
    articulos.precio = precio;
    articulos.ptovta = ptovta;
    articulos.ptoped = ptoped;
    articulos.evento = evento;
    articulos.overstock = overstock;
    articulos.halta = halta;
    articulos.falta = falta;
    articulos.hmodif = hmodif;
    articulos.fmodif = fmodif ;
    articulos.estado = estado;
    articulos.id_operador = id_operador;
    
    await articulos.save();

    res.json(articulos);
  } catch (error) {
    return res.status(404).json({message: (error as Error).message});
  }
};

export async function deleteArticulo(req:Request, res:Response) {
  const {id} = req.params;
  try {
    await Articulos.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(200);
  } catch (error) {
    return res.status(404).json({message: (error as Error).message});
  }
};


