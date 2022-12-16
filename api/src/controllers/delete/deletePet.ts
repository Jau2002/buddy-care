import { Request, Response } from 'express';
import Pet from '../../models/Pet';
import { NOT_FOUND, NO_CONTENT } from '../protocols';

async function deletePet(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	try {
		await Pet.destroy({ where: { id } });
		return res.sendStatus(NO_CONTENT);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default deletePet;
