import express from 'express';
import {
  deleteResults,
  getResults,
  storeResult,
} from '../controllers/resultController.js';

const resultRouter = express.Router();

// Routes
resultRouter.post('/new-result', storeResult);
resultRouter.get('/', getResults);
resultRouter.delete('/', deleteResults);

export default resultRouter;
