import { Request, Response } from 'express';
import Vet from '../../models/Vet';
import { NOT_FOUND, OK } from '../protocols';

async function getAllVets(_: Request, res: Response): Promise<Response> {
	try {
		const totalVets = await Vet.findAll({
			attributes: [
				'id',
				'nombre',
				'nota',
				'telefono',
				'email',
				'falta',
				'halta',
			],
		});
		return res.status(OK).send(totalVets);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default getAllVets;
