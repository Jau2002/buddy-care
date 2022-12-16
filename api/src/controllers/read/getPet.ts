import { Request, Response } from 'express';
import Pet from '../../models/Pet';
import { NOT_FOUND, OK } from '../protocols';

async function getPet(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	try {
		const pet = await Pet.findOne({ where: { id } });
		return res.status(OK).send(pet);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default getPet;
