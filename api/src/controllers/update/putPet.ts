import { Request, Response } from 'express';
import Pet from '../../models/Pet';
import { NOT_FOUND, OK } from '../protocols';

async function putPet(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	const {
		id_cliente,
		nombre,
		especie,
		raza,
		edad,
		peso,
		estado,
		id_madre,
		id_padre,
		adjuntos,
		nota,
		chip,
		falta,
		halta,
	} = req.body;
	try {
		const petModified: any | null = await Pet.findByPk(id);

		petModified.id_cliente = id_cliente;
		petModified.nombre = nombre;
		petModified.especie = especie;
		petModified.raza = raza;
		petModified.edad = edad;
		petModified.peso = peso;
		petModified.estado = estado;
		petModified.id_madre = id_madre;
		petModified.id_padre = id_padre;
		petModified.adjuntos = adjuntos;
		petModified.nota = nota;
		petModified.chip = chip;
		petModified.falta = falta;
		petModified.halta = halta;

		await petModified.save();

		return res.status(OK).send(petModified);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default putPet;
