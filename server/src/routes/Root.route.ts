import express from 'express'
import reviewsRouter from './Reviews.route'

const router = express.Router()

router.use('/reviews', reviewsRouter)

export default router
