import Reviews from '../migrations/Reviews.migration';
import { Query } from '../types';

export const readReviews = async (query: Query) => {
    const { sortBy = 'updatedAt', sortOrder = 'DESC', ...where } = query;

    const reviews = await Reviews.findAll({
        where,
        order: [[sortBy, sortOrder]],
    });

    return reviews;
};
