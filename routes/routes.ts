import express from 'express';
import * as userController from '../controllers/userController/index';
import * as postController from '../controllers/postController/index';

const router = express.Router();

router.post('/users', userController.register);

router.post('/post', postController.createPost);

export default router;
