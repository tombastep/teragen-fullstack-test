import express from 'express';
import { getReviews } from './../controllers/Reviews.controller';
const reviewsRouter = express.Router();
reviewsRouter.get('/', getReviews);
export default reviewsRouter;
//# sourceMappingURL=Reviews.route.js.map