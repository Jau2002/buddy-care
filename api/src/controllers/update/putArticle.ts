import { Request, Response } from 'express';
import Article from '../../models/Article';
import { NOT_FOUND, OK } from '../protocols';

async function putArticle(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	const {
		nombre,
		rubro,
		descripcion,
		fotos,
		id_vet,
		precio,
		stock,
		ptoped,
		ptovta,
		overstock,
		evento,
		falta,
		halta,
		fmodif,
		hmodif,
		id_operador,
		estado,
	} = req.body;
	try {
		const articleModified: any | null = await Article.findByPk(id);

		articleModified.nombre = nombre;
		articleModified.descripcion = descripcion;
		articleModified.rubro = rubro;
		articleModified.id_vet = id_vet;
		articleModified.fotos = fotos;
		articleModified.stock = stock;
		articleModified.precio = precio;
		articleModified.ptovta = ptovta;
		articleModified.ptoped = ptoped;
		articleModified.evento = evento;
		articleModified.overstock = overstock;
		articleModified.halta = halta;
		articleModified.falta = falta;
		articleModified.hmodif = hmodif;
		articleModified.fmodif = fmodif;
		articleModified.estado = estado;
		articleModified.id_operador = id_operador;

		await articleModified.save();

		return res.status(OK).send(articleModified);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default putArticle;
