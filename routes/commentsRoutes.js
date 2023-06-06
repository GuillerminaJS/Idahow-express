import * as commentsController from '../controllers/commentsController.js'

import { verifyToken } from '../middleware/auth.js';
import express from "express";

const router = express.Router();

router.get('/comments', commentsController.showAllComments);
router.get('/comments/:idComment', commentsController.showCommentById);
router.post('/comments', commentsController.newComment);    
router.put('/comments', commentsController.updateComment);
router.delete('/comments/:idComment', commentsController.deleteComment);

export default router;