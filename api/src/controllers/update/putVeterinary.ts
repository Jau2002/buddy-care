import { Request, Response } from 'express';
import Veterinary from '../../models/Veterinary';
import { NOT_FOUND, OK } from '../protocols';

async function putVeterinary(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	const {
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
		const veterinaryModified: any | null = await Veterinary.findByPk(id);

		veterinaryModified.razon = razon;
		veterinaryModified.responsable = responsable;
		veterinaryModified.localidad = localidad;
		veterinaryModified.provincia = provincia;
		veterinaryModified.telefono = telefono;
		veterinaryModified.direccion = direccion;
		veterinaryModified.instagram = instagram;
		veterinaryModified.facebook = facebook;
		veterinaryModified.fotos = fotos;
		veterinaryModified.descripcion = descripcion;
		veterinaryModified.halta = halta;
		veterinaryModified.falta = falta;
		veterinaryModified.usuario = usuario;
		veterinaryModified.estado = estado;
		veterinaryModified.email = email;
		veterinaryModified.password = password;

		await veterinaryModified.save();

		return res.status(OK).send(veterinaryModified);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default putVeterinary;
