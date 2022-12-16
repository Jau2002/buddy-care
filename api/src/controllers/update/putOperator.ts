import { Request, Response } from 'express';
import Operator from '../../models/Operator';
import { NOT_FOUND, OK } from '../protocols';

async function putOperator(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	const { nombre, usuario, password, email, rol, estado, falta, halta } =
		req.body;
	try {
		const operadorModified: any | null = await Operator.findByPk(id);

		operadorModified.nombre = nombre;
		operadorModified.usuario = usuario;
		operadorModified.password = password;
		operadorModified.email = email;
		operadorModified.rol = rol;
		operadorModified.estado = estado;
		operadorModified.falta = falta;
		operadorModified.halta = halta;

		await operadorModified.save();

		return res.status(OK).send(operadorModified);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default putOperator;
