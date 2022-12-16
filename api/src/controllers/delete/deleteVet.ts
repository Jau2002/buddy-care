import { Request, Response } from 'express';
import Vet from '../../models/Vet';
import { NOT_FOUND, NO_CONTENT } from '../protocols';

async function deleteVet(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	try {
		await Vet.destroy({ where: { id } });
		return res.sendStatus(NO_CONTENT);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default deleteVet;
