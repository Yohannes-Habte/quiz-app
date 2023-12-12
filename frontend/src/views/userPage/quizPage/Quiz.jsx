import React, { useState } from 'react';
import './Quiz.scss';
import { Navigate } from 'react-router-dom';
import Questions from '../../../components/questions/Questions';
import { useDispatch, useSelector } from 'react-redux';
import {
  MoveNextQuestion,
  MovePrevQuestion,
} from '../../../utiles/FetchQuestions';
import { PushAnswer } from '../../../utiles/setResult';

const Quiz = () => {
  const [check, setChecked] = useState(undefined);

  const { result } = useSelector((state) => state.result);
  const { quizQuestions, questionNumber } = useSelector(
    (state) => state.questions
  );

  const dispatch = useDispatch();

  console.log('result', result);

  // Handle Next Question
  const nextQuestion = () => {
    if (questionNumber < quizQuestions.length) {
      dispatch(MoveNextQuestion());

      if (result.length <= questionNumber) {
        dispatch(PushAnswer(check));
      }
    }
    setChecked(undefined);
  };

  // Handle Previous Question
  const PreviousQuestion = () => {
    if (questionNumber > 0) {
      dispatch(MovePrevQuestion());
    }
  };

  // on checked handler for the radio input
  const onChecked = (check) => {
    setChecked(check);
    console.log(check);
  };

  // finished exam after the last question
  if (result.length && result.length >= quizQuestions.length) {
    return <Navigate to={'/result'} replace={true}></Navigate>;
  }

  return (
    <main>
      <section>
        <h1 className="title">Quiz Application</h1>

        {/* Questions */}
        <Questions onChecked={onChecked} />

        <div className="buttons-wrapper">
          {questionNumber > 0 ? (
            <button
              className="quiz-btn previous-btn"
              onClick={PreviousQuestion}
            >
              Previous
            </button>
          ) : (
            <div></div>
          )}
          <button className="quiz-btn next-btn" onClick={nextQuestion}>
            Next
          </button>
        </div>
      </section>
    </main>
  );
};

export default Quiz;
