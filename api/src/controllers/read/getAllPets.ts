import { Request, Response } from 'express';
import Pet from '../../models/Pet';
import { NOT_FOUND, OK } from '../protocols';

async function getAllPets(_: Request, res: Response): Promise<Response> {
	try {
		const totalPets = await Pet.findAll({
			attributes: [
				'id',
				'id_cliente',
				'nombre',
				'especie',
				'raza',
				'edad',
				'peso',
				'estado',
				'id_madre',
				'id_padre',
				'adjuntos',
				'nota',
				'chip',
				'falta',
				'halta',
			],
		});
		return res.status(OK).send(totalPets);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default getAllPets;
