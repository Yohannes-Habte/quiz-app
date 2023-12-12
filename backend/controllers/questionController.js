import Question from '../models/questionModel.js';
import createError from 'http-errors';
import {
  programmingQuestions,
  programmingQuestionsAnswer,
} from '../database/data.js';

// ========================================================================
// Get Questions
// ========================================================================
export const insertQuestions = async (req, res, next) => {
  try {
    await Question.insertMany({
      questions: programmingQuestions,
      answers: programmingQuestionsAnswer,
    });
    res.status(200).json({ messages: 'Data Saved Successfully!' });
  } catch (error) {
    res.json({ error });
  }
};

// ========================================================================
// Get Questions
// ========================================================================
export const getQuestions = async (req, res, next) => {
  try {
    const questions = await Question.find();
    if (!questions) {
      return next(createError(400, 'Questions not found!'));
    }

    res.status(200).json(questions);
  } catch (error) {}
};

// ========================================================================
// Get Questions
// ========================================================================
export const deleteQuestions = async (req, res, next) => {
  try {
    await Question.deleteMany();
    res.json({ success: 'Questions Deleted Successfully!' });
  } catch (error) {
    res.json({ error });
  }
};
