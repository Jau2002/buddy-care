import { Request, Response } from 'express';
import Operator from '../../models/Operator';
import { NOT_FOUND, NO_CONTENT } from '../protocols';

async function deleteOperator(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	try {
		await Operator.destroy({ where: { id } });
		return res.sendStatus(NO_CONTENT);
	} catch (err) {
		return res.status(NOT_FOUND).json({ message: (err as Error).message });
	}
}

export default deleteOperator;
