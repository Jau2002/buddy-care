import { Request, Response } from 'express';
import Veterinary from '../../models/Veterinary';
import { NOT_FOUND, OK } from '../protocols';

async function getAllVeterinaries(
	_: Request,
	res: Response
): Promise<Response> {
	try {
		const totalVeterinaries = await Veterinary.findAll({
			attributes: [
				'id',
				'razon',
				'responsable',
				'provincia',
				'localidad',
				'direccion',
				'telefono',
				'facebook',
				'instagram',
				'descripcion',
				'fotos',
				'falta',
				'halta',
				'estado',
				'usuario',
				'password',
				'email',
			],
		});
		return res.status(OK).send(totalVeterinaries);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default getAllVeterinaries;
