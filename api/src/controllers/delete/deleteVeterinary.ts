import { Request, Response } from 'express';
import Veterinary from '../../models/Veterinary';
import { NOT_FOUND, NO_CONTENT } from '../protocols';

async function deleteVeterinary(
	req: Request,
	res: Response
): Promise<Response> {
	const { id } = req.params;
	try {
		await Veterinary.destroy({ where: { id } });
		return res.sendStatus(NO_CONTENT);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default deleteVeterinary;
