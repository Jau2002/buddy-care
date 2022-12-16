import { Request, Response } from 'express';
import Commerce from '../../models/Commerce';
import { NOT_FOUND, OK } from '../protocols';

async function getCommerce(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	try {
		const commerce = await Commerce.findOne({ where: { id } });
		return res.status(OK).send(commerce);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default getCommerce;
