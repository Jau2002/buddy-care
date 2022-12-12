import { Request, Response } from 'express';
import { Mascotas }  from "../models/Mascotas";


export async function getMascotas(_:Request, res:Response) {
  try {
    const xMascotas = await Mascotas.findAll({
      attributes: ["id", "id_cliente", "nombre", "especie", "raza", "edad", "peso", "estado", "id_madre", "id_padre", "adjuntos", "nota", "chip", "falta", "halta"]
    });
    res.json(xMascotas);
  } catch (error) {
    res.status(404).json({
      message: (error as Error).message,
    });
  }
};

export async function createMascotas(req:any, res:any) {
  const {id, id_cliente, nombre, especie, raza, edad, peso, estado, id_madre, id_padre, adjuntos, nota, chip, falta, halta} = req.body;
  try {
    let newMascotas = await Mascotas.create(
      {id, id_cliente, nombre, especie, raza, edad, peso, estado, id_madre, id_padre, adjuntos, nota, chip, falta, halta});
    return res.json(newMascotas);
  } catch (error) {
    res.status(404).json({
      message: (error as Error).message,
    });
  }
  res.json("received");
};

export async function getMascota(req:Request, res:Response) {
  const {id} = req.params;
  try {
    const Mascota = await Mascotas.findOne({
      where: {
        id,
      },
    });
    res.json(Mascota);
  } catch (error) {
    res.status(404).json({
      message: (error as Error).message,
    });
  }
};

export const updateMascotas = async (req:any, res:any) => {
  try {
    const {id} = req.params;
    const {id_cliente, nombre, especie, raza, edad, peso, estado, id_madre, id_padre, adjuntos, nota, chip, falta, halta} = req.body;

    const mascota: any | null = await Mascotas.findByPk(id);
    
    mascota.id_cliente =id_cliente;
    mascota.nombre = nombre;
    mascota.especie = especie;
    mascota.raza = raza;
    mascota.edad = edad;
    mascota.peso = peso;
    mascota.estado = estado;
    mascota.id_madre = id_madre;
    mascota.id_padre = id_padre;
    mascota.adjuntos = adjuntos;
    mascota.nota = nota;
    mascota.chip = chip;
    mascota.falta = falta;
    mascota.halta = halta;
       
    await mascota.save();

    res.json(mascota);
  } catch (error) {
    return res.status(404).json({message: (error as Error).message});
  }
};

export async function deleteMascota(req:Request, res:Response) {
    const {id} = req.params;
  try {
    await Mascotas.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(200);
  } catch (error) {
    return res.status(404).json({message: (error as Error).message});
  }
};


