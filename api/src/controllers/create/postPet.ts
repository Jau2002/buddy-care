import { Request, Response } from 'express';
import Pet from '../../models/Pet';
import { CONFLICT, CREATE } from '../protocols';

async function postPet(req: Request, res: Response): Promise<Response> {
	const {
		id,
		id_cliente,
		nombre,
		especie,
		raza,
		edad,
		peso,
		estado,
		id_madre,
		id_padre,
		adjuntos,
		nota,
		chip,
		falta,
		halta,
	} = req.body;
	try {
		const newPet = await Pet.create({
			id,
			id_cliente,
			nombre,
			especie,
			raza,
			edad,
			peso,
			estado,
			id_madre,
			id_padre,
			adjuntos,
			nota,
			chip,
			falta,
			halta,
		});
		return res.status(CREATE).send(newPet);
	} catch (err) {
		return res.status(CONFLICT).send({ message: (err as Error).message });
	}
}

export default postPet;
