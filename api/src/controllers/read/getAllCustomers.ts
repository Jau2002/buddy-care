import { Request, Response } from 'express';
import Customer from '../../models/Customer';
import { NOT_FOUND, OK } from '../protocols';

async function getAllCustomers(_: Request, res: Response): Promise<Response> {
	try {
		const totalCustomers = await Customer.findAll({
			attributes: [
				'id',
				'apellido',
				'nombres',
				'pais',
				'localidad',
				'direccion',
				'cp',
				'telefono',
				'email',
				'usuario',
				'password',
				'facebook',
				'instagram',
				'notas_int',
				'falta',
				'halta',
			],
		});
		return res.status(OK).send(totalCustomers);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default getAllCustomers;
