import { Request, Response } from 'express';
import Operator from '../../models/Operator';
import { CONFLICT, CREATE } from '../protocols';

async function postOperator(req: Request, res: Response): Promise<Response> {
	const { id, nombre, usuario, password, email, rol, estado, falta, halta } =
		req.body;
	try {
		const newOperator = await Operator.create({
			id,
			nombre,
			usuario,
			password,
			email,
			rol,
			estado,
			falta,
			halta,
		});
		return res.status(CREATE).send(newOperator);
	} catch (err) {
		return res.status(CONFLICT).json({ message: (err as Error).message });
	}
}

export default postOperator;
