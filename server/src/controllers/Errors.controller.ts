import { Request, Response, NextFunction } from 'express';

export const handleErrors = async (err: any, _req: Request, res: Response, _next: NextFunction) => {
    if (err) {
        const status = err.status || err.response?.status || 500
        const message =
            err.message ||
            err.response?.data?.message ||
            'Internal server error'
        res.status(status).send({ message })
    }
}