import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quizQuestions: [],
  answers: [],
  questionNumber: 0,
};

export const questionReducer = createSlice({
  name: 'questions',
  initialState,

  reducers: {
    startExamAction: (state, action) => {
      const { questions, answers } = action.payload;
      return {
        ...state,
        quizQuestions: questions,
        answers: answers,
      };
    },

    moveNextAction: (state) => {
      return {
        ...state,
        questionNumber: state.questionNumber + 1,
      };
    },

    movePrevAction: (state) => {
      return {
        ...state,
        questionNumber: state.questionNumber - 1,
      };
    },

    resetAllAction: () => {
      return {
        quizQuestions: [],
        answers: [],
        questionNumber: 0,
      };
    },
  },
});

export const {
  startExamAction,
  moveNextAction,
  movePrevAction,
  resetAllAction,
} = questionReducer.actions;

export default questionReducer.reducer;
