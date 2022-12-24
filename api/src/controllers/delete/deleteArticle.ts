import { Request, Response } from 'express';
import Article from '../../models/Article';
import { NOT_FOUND, NO_CONTENT } from '../protocols';

async function deleteArticle(req: Request, res: Response): Promise<Response> {
	const { id } = req.params;
	try {
		await Article.destroy({ where: { id } });
		return res.sendStatus(NO_CONTENT);
	} catch (err) {
		return res.status(NOT_FOUND).send({ message: (err as Error).message });
	}
}

export default deleteArticle;
