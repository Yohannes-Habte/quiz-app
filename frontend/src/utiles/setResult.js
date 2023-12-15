import axios from 'axios';
import * as Action from '../redux/reducers/resultReducer';

// ======================================================================
// Push answers
// ======================================================================
export const PushAnswer = (result) => async (dispatch) => {
  try {
    await dispatch(Action.pushResultAction(result));
  } catch (error) {
    console.log(error);
  }
};

// ======================================================================
// Update answers
// ======================================================================
export const updateResult = (index) => async (dispatch) => {
  try {
    dispatch(Action.updateResultAction(index));
  } catch (error) {
    console.log(error);
  }
};


// ======================================================================
// User data
// ======================================================================
export const usePublishResult = async (resultData) => {
  const { result, username } = resultData;

  try {
    if (result !== null && !username) {
      throw new Error("Couldn't get Result");
    }
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/results/new-result`,
      resultData
    );
  } catch (error) {
    console.log(error);
  }
};
