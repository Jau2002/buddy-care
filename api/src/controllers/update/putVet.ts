import { Request, Response } from 'express';
import Vet from '../../models/Vet';
import { NOT_FOUND, OK } from '../protocols';

async function putVet(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	const { nombre, nota, telefono, email, falta, halta } = req.body;
	try {
		const vetModified: any | null = await Vet.findByPk(id);

		vetModified.nombre = nombre;
		vetModified.nota = nota;
		vetModified.telefono = telefono;
		vetModified.email = email;
		vetModified.falta = falta;
		vetModified.halta = halta;

		await vetModified.save();

		return res.status(OK).send(vetModified);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default putVet;
