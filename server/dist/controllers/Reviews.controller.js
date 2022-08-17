import { readReviews } from "../models/Reviews.model";
export const getReviews = async (req, res, next) => {
    const { query } = req;
    try {
        const pets = await readReviews(query);
        res.json(pets);
    }
    catch (err) {
        next(err);
    }
};
//# sourceMappingURL=Reviews.controller.js.map