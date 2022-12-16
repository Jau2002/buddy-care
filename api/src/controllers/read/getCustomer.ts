import { Request, Response } from 'express';
import Customer from '../../models/Customer';
import { NOT_FOUND, OK } from '../protocols';

async function getCustomer(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	try {
		const customer = await Customer.findOne({ where: { id } });
		return res.status(OK).send(customer);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default getCustomer;
