import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Action from '../redux/reducers/questionReducer';
import axios from 'axios';
/** fetch question hook to fetch api data and set value to store */
export const useFetchQestion = () => {
  // Global variables
  const dispatch = useDispatch();
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() => {
    const fetchQuestions = async () => {
      setGetData((prev) => ({ ...prev, isLoading: true }));
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/questions`
        );

        const questions = data[0].questions;
        const answers = data[0].answers;

        if (questions.length > 0) {
          setGetData((prev) => ({ ...prev, isLoading: false }));
          setGetData((prev) => ({ ...prev, apiData: questions }));

          /** dispatch an action */
          dispatch(Action.startExamAction({ questions, answers }));
        } else {
          throw new Error('No Question Avalibale');
        }
      } catch (error) {
        setGetData((prev) => ({ ...prev, isLoading: false }));
        setGetData((prev) => ({ ...prev, serverError: error }));
      }
    };

    fetchQuestions();
  }, [dispatch]);

  return [getData, setGetData];
};

/** Move to the next question using Dispatch function */
export const MoveNextQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.moveNextAction()); /** increase trace by 1 */
  } catch (error) {
    console.log(error);
  }
};

/** Move to previous question using Dispatch function */
export const MovePrevQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.movePrevAction());
  } catch (error) {
    console.log(error);
  }
};
