import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: null,
  result: [],
};

export const resultReducer = createSlice({
  name: 'result',
  initialState,

  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },

    pushResultAction: (state, action) => {
      state.result.push(action.payload);
    },

    updateResultAction: (state, action) => {
      const { questionNumber, checked } = action.payload;
      state.result.fill(checked, questionNumber, questionNumber + 1);
    },

    resetResultAction: () => {
      return {
        userId: null,
        result: [],
      };
    },
  },
});

export const {
  setUserId,
  pushResultAction,
  resetResultAction,
  updateResultAction,
} = resultReducer.actions;

export default resultReducer.reducer;
