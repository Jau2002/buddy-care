import { Request, Response } from 'express';
import { NOT_FOUND, OK } from '../protocols/protocols';

function getHealth(_: Request, res: Response): Response {
	try {
		return res.status(OK).send({ message: 'the server is running faster' });
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default getHealth;
