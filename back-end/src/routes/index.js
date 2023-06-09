import express from 'express';
import userRouter from './user.js'

const router = express.Router();

router.use('/router', userRouter);

export default router;