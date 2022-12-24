import { Request, Response } from 'express';
import Article from '../../models/Article';
import { NOT_FOUND, OK } from '../protocols';

async function getArticle(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	try {
		const article = await Article.findOne({ where: { id } });
		return res.status(OK).send(article);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default getArticle;
