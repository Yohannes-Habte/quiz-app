import React, { useEffect, useState } from 'react';
import './Questions.scss';
import { useDispatch, useSelector } from 'react-redux';
import { updateResult } from '../../utiles/setResult';
import { useFetchQestion } from '../../utiles/FetchQuestions';
import './Questions.scss';

const Questions = ({ onChecked }) => {
  // Global variables
  const { questionNumber } = useSelector((state) => state.questions);
  const result = useSelector((state) => state.result.result);
  const currentQuestion = useSelector(
    (state) => state.questions.quizQuestions[state.questions.questionNumber]
  );
  const dispatch = useDispatch();
  const [{ isLoading, apiData, serverError }] = useFetchQestion();

  // Local state variables
  const [checked, setChecked] = useState(undefined);
  const [radio, setRadio] = useState(0);

  // Update the previous anawer
  useEffect(() => {
    dispatch(updateResult({ questionNumber, checked }));
  }, [checked]);

  // change handler
  const onSelect = (i) => {
    onChecked(i);
    setChecked(i);
    dispatch(updateResult({ questionNumber, checked }));
  };

  return (
    <section className="quations-wrapper">
      <h2 className="quation-title"> {currentQuestion?.question} </h2>

      <ul key={currentQuestion?.id} className="question-options">
        {currentQuestion?.options.map((option, index) => (
          <li key={index} className="option">
            <input
              type="radio"
              value={false}
              name={option}
              id={`q${index}-option`}
              onChange={() => onSelect(index)}
            />

            <label className="option-label" htmlFor={`q${index}-option`}>
              {option}
            </label>
            <div
              className={`check ${
                result[questionNumber] == index ? 'checked' : ''
              }`}
            ></div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Questions;
