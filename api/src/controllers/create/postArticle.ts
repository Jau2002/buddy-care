import { Request, Response } from 'express';
import Article from '../../models/Article';
import { CONFLICT, CREATE } from '../protocols';

async function postArticle(req: Request, res: Response): Promise<Response> {
	const {
		id,
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
		const newArticle = await Article.create({
			id,
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
		});
		return res.status(CREATE).send(newArticle);
	} catch (err) {
		return res.status(CONFLICT).send({ message: (err as Error).message });
	}
}

export default postArticle;
