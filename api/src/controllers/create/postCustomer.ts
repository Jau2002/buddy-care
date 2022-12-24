import { Request, Response } from 'express';
import Customer from '../../models/Customer';
import { CONFLICT, CREATE } from '../protocols';

async function postCustomer(req: Request, res: Response): Promise<Response> {
	const {
		id,
		apellido,
		nombres,
		pais,
		localidad,
		direccion,
		cp,
		telefono,
		email,
		usuario,
		password,
		facebook,
		instagram,
		notas_int,
		falta,
		halta,
	} = req.body;
	try {
		const newCustomer = await Customer.create({
			id,
			apellido,
			nombres,
			pais,
			localidad,
			direccion,
			cp,
			telefono,
			email,
			usuario,
			password,
			facebook,
			instagram,
			notas_int,
			falta,
			halta,
		});
		return res.status(CREATE).send(newCustomer);
	} catch (err) {
		return res.status(CONFLICT).send({ message: (err as Error).message });
	}
}

export default postCustomer;
