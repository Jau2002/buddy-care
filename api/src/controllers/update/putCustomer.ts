import { Request, Response } from 'express';
import Customer from '../../models/Customer';
import { NOT_FOUND, OK } from '../protocols';

async function putCostumer(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	const {
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
		const CustomerModified: any | null = await Customer.findByPk(id);

		CustomerModified.nombres = nombres;
		CustomerModified.apellido = apellido;
		CustomerModified.localidad = localidad;
		CustomerModified.pais = pais;
		CustomerModified.cp = cp;
		CustomerModified.direccion = direccion;
		CustomerModified.email = email;
		CustomerModified.telefono = telefono;
		CustomerModified.password = password;
		CustomerModified.usuario = usuario;
		CustomerModified.instagram = instagram;
		CustomerModified.facebook = facebook;
		CustomerModified.falta = falta;
		CustomerModified.notas_int = notas_int;
		CustomerModified.halta = halta;

		await CustomerModified.save();

		return res.status(OK).send(CustomerModified);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default putCostumer;
