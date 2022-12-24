import { Request, Response } from 'express';
import Vet from '../../models/Vet';
import { CONFLICT, CREATE } from '../protocols';

async function postVet(req: Request, res: Response): Promise<Response> {
	const { id, nombre, nota, telefono, email, falta, halta } = req.body;
	try {
		const newVet = await Vet.create({
			id,
			nombre,
			nota,
			telefono,
			email,
			falta,
			halta,
		});
		return res.status(CREATE).send(newVet);
	} catch (err) {
		return res.status(CONFLICT).send({ message: (err as Error).message });
	}
}

export default postVet;
