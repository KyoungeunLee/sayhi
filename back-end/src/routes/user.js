import express from 'express';

const router = express.Router();

// 회원 가입
router.post('/sign_up');

// 로그인
router.post('/sign_in');

export default router;