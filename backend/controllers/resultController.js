import Result from '../models/resultModel.js';
import createError from 'http-errors';

// ========================================================================
// Store Results
// ========================================================================
export const storeResult = async (req, res, next) => {
  try {
    const { username, result, attempts, points, achived } = req.body;

    if (!username) {
      return next(createError(400, 'Please enter username!'));
    }

    if (!result) {
      return next(createError(400, 'Please answer the question!'));
    }

    await Result.create({ username, result, attempts, points, achived });

    res.status(200).json({ message: 'Result Sent Successfully!' });
  } catch (error) {
    next(createError(400, 'Data could not be saved! Please try again!'));
  }
};

// ========================================================================
// Get Results
// ========================================================================
export const getResults = async (req, res, next) => {
  try {
    const results = await Result.find();
    if (!results) {
      return next(createError(400, 'Results not found!'));
    }

    res.status(200).json({ success: true, results });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// ========================================================================
// Delete Results
// ========================================================================
export const deleteResults = async (req, res, next) => {
  try {
    await Result.deleteMany();
    res.status(200).json({ success: 'Result Deleted Successfully!' });
  } catch (error) {
    res.status(500).json({ error });
  }
};
