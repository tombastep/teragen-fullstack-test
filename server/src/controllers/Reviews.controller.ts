import { NextFunction, Request, Response } from "express"
import { readReviews } from "../models/Reviews.model"

export const getReviews = async (req: Request, res: Response, next: NextFunction) => {
    const { query } = req
    try {
        const pets = await readReviews(query)
        res.json(pets)
    } catch (err) {
        next(err)
    }
}