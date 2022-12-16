import { Router } from 'express';
import postReview from '../controllers/create/postReview';
import deleteReview from '../controllers/Delete/deleteReview';
import getAllReviews from '../controllers/read/getAllReviews';
import getReview from '../controllers/read/getReview';
import putReview from '../controllers/update/putReview';

const reviews: Router = Router();

reviews.post('/', postReview);

reviews.get('/', getAllReviews);

reviews.put('/:id', putReview);

reviews.delete('/:id', deleteReview);

reviews.get('/:id', getReview);

export default reviews;
