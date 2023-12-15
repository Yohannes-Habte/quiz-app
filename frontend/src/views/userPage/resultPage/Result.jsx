import React, { useEffect } from 'react';
import './Result.scss';
import { Link } from 'react-router-dom';
import ResultTable from '../../../components/userProfile/resultTable/ResultTable';
import { useDispatch, useSelector } from 'react-redux';
import { resetAllAction } from '../../../redux/reducers/questionReducer';
import { resetResultAction } from '../../../redux/reducers/resultReducer';
import {
  answeredQuestions,
  flagResult,
  totalAtteptedResult,
} from '../../../utiles/helper';
import { usePublishResult } from '../../../utiles/setResult';

const Result = () => {
  const dispatch = useDispatch();
  const { result, userId } = useSelector((state) => state.result);
  const { quizQuestions, answers } = useSelector((state) => state.questions);

  const totalPoints = quizQuestions.length * 10;
  const userAttempts = answeredQuestions(result);
  const userAtteptedResult = totalAtteptedResult(result, answers, 10);
  const flag = flagResult(userAtteptedResult, totalPoints);

  // store user result
  usePublishResult({
    result,
    username: userId,
    attempts: userAttempts,
    points: userAtteptedResult,
    achived: flag ? 'Passed' : 'Failed',
  });

  // restart handler
  const restartHandler = () => {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  };

  return (
    <main className="result-page">
      <section className="result-page-container">
        <h1 className="result-title">Final Result</h1>

      <div className='result-and-table-container'>
      <div className="result-wrapper">
          <article className="result">
            <h3 className="subTitle">Username</h3>
            <p className="text">{userId || ''}</p>
          </article>

          <article className="result">
            <h3 className="subTitle">Total Quiz Points : </h3>
            <p className="text">{totalPoints || 0}</p>
          </article>

          <article className="result">
            <h3 className="subTitle">Total Questions : </h3>
            <p className="text">{quizQuestions.length || 0}</p>
          </article>

          <article className="result">
            <h3 className="subTitle">Total Attempts : </h3>
            <p className="text">{userAttempts || 0}</p>
          </article>

          <article className="result">
            <h3 className="subTitle">Total Earn Points : </h3>
            <p className="text">{userAtteptedResult || 0}</p>
          </article>

          <article className="result">
            <h3 className="subTitle">Quiz Result</h3>
            <p className="text">{flag ? 'Passed' : 'Failed'}</p>
          </article>
        </div>
        <ResultTable />
      </div>

        <p className="restart">
          <Link className="btn" to={'/'} onClick={restartHandler}>
            Restart
          </Link>
        </p>

       
      </section>
    </main>
  );
};

export default Result;
