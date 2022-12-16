import { Request, Response } from 'express';
import Veterinary from '../../models/Veterinary';
import { CONFLICT, CREATE } from '../protocols';

async function postVeterinary(req: Request, res: Response): Promise<Response> {
	const {
		id,
		razon,
		responsable,
		provincia,
		localidad,
		direccion,
		telefono,
		facebook,
		instagram,
		descripcion,
		fotos,
		falta,
		halta,
		estado,
		usuario,
		password,
		email,
	} = req.body;
	try {
		const newVeterinary = await Veterinary.create({
			id,
			razon,
			responsable,
			provincia,
			localidad,
			direccion,
			telefono,
			facebook,
			instagram,
			descripcion,
			fotos,
			falta,
			halta,
			estado,
			usuario,
			password,
			email,
		});
		return res.status(CREATE).send(newVeterinary);
	} catch (err) {
		return res.status(CONFLICT).send({ message: (err as Error).message });
	}
}

export default postVeterinary;
