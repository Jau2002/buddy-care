import { Router } from 'express';
import postArticle from '../controllers/create/postArticle';
import deleteArticle from '../controllers/Delete/deleteArticle';
import getAllArticles from '../controllers/read/getAllArticles';
import getArticle from '../controllers/read/getArticle';
import putArticle from '../controllers/update/putArticle';

const articles: Router = Router();

articles.post('/', postArticle);

articles.delete('/:id', deleteArticle);

articles.get('/:id', getArticle);

articles.get('/', getAllArticles);

articles.put('/:id', putArticle);

export default articles;
