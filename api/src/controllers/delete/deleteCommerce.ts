import { Request, Response } from 'express';
import Commerce from '../../models/Commerce';
import { NOT_FOUND, NO_CONTENT } from '../protocols';

async function deleteCommerce(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	try {
		await Commerce.destroy({ where: { id } });
		return res.sendStatus(NO_CONTENT);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default deleteCommerce;
