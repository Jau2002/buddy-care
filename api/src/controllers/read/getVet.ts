import { Request, Response } from 'express';
import Vet from '../../models/Vet';
import { NOT_FOUND, OK } from '../protocols';

async function getVet(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	try {
		const vet = await Vet.findOne({ where: { id } });
		return res.status(OK).send(vet);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default getVet;
