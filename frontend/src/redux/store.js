import { combineReducers, configureStore } from '@reduxjs/toolkit';
import questionReducer from './reducers/questionReducer';
import resultReducer from './reducers/resultReducer';
import userReducer from './reducers/userReducer';

// Store items in the local storage
const rootReducer = combineReducers({
  questions: questionReducer,
  result: resultReducer,
  user: userReducer,
});

// create Sore variable
export const Store = configureStore({
  reducer: rootReducer,
});
