import { Request, Response } from 'express';
import Operator from '../../models/Operator';
import { NOT_FOUND, OK } from '../protocols';

async function getAllOperators(_: Request, res: Response): Promise<Response> {
	try {
		const totalOperators = await Operator.findAll({
			attributes: [
				'id',
				'nombre',
				'usuario',
				'password',
				'email',
				'rol',
				'estado',
				'falta',
				'halta',
			],
		});
		return res.status(OK).send(totalOperators);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default getAllOperators;
