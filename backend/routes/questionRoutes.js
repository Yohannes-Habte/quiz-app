import express from 'express';
import {
  deleteQuestions,
  getQuestions,
  insertQuestions,
} from '../controllers/questionController.js';

const questionRouter = express.Router();

// Routes
questionRouter.post('/', insertQuestions);
questionRouter.get('/', getQuestions);
questionRouter.delete('/', deleteQuestions);

export default questionRouter;
