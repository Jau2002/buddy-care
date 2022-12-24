import { Request, Response } from 'express';
import Veterinary from '../../models/Veterinary';
import { NOT_FOUND, OK } from '../protocols';

async function getVeterinary(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	try {
		const veterinary = await Veterinary.findOne({ where: { id } });
		return res.status(OK).send(veterinary);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default getVeterinary;
