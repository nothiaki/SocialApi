import express from 'express';
import * as authController from '../controllers/authController/index';
import * as userController from '../controllers/userController/index';

const router = express.Router();

router.post('/register', authController.register);
router.post('/post', userController.createPost);

export default router;