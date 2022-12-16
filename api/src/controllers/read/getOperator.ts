import { Request, Response } from 'express';
import Operator from '../../models/Operator';
import { NOT_FOUND, OK } from '../protocols';

async function getOperador(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	try {
		const operador = await Operator.findOne({ where: { id } });
		return res.status(OK).send(operador);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default getOperador;
