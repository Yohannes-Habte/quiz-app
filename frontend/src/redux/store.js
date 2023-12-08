import { combineReducers, configureStore } from '@reduxjs/toolkit';
import questionReducer from './reducers/questionReducer';
import resultReducer from './reducers/resultReducer';

const rootReducer = combineReducers({
  questions: questionReducer,
  result: resultReducer,
});

/** create store with reducer */
export default configureStore({ reducer: rootReducer });
