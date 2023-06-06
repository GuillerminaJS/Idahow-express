import express from "express";
import * as newsController from '../controllers/newsController.js';

const router = express.Router();

router.get('/news', newsController.showAllNews);
router.get('/news/:idNews', newsController.showNewsById);
router.post('/news', newsController.newNews);    
router.put('/news', newsController.updateNews);
router.delete('/news/:idNews', newsController.deleteNews);

export default router;