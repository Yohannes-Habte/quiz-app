import { combineReducers, configureStore } from '@reduxjs/toolkit';
import questionReducer from './reducers/questionReducer';
import resultReducer from './reducers/resultReducer';

// Store items in the local storage
const rootReducer = combineReducers({
  questions: questionReducer,
  result: resultReducer,
});

// create Sore variable
export const Store = configureStore({
  reducer: rootReducer,
});
