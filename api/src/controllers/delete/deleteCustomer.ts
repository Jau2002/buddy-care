import { Request, Response } from 'express';
import Customer from '../../models/Customer';
import { NOT_FOUND, NO_CONTENT } from '../protocols';

async function deleteCustomer(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	try {
		await Customer.destroy({ where: { id } });
		return res.sendStatus(NO_CONTENT);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default deleteCustomer;
