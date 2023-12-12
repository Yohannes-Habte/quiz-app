import React, { useRef } from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserId } from '../../redux/reducers/resultReducer';

const Home = () => {
  const {userId} = useSelector(state => state.result)
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const startQuiz = () => {
    // If the user put the email in the input, then user can access the questions
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
  };
  return (
    <main className="home-page">
      <section className="home-container">
        <h1 className="title">Quiz Application</h1>

        <ol className="instruction-wrapper">
          <li className="instruction">
            You will be asked 10 questions one after another.
          </li>
          <li className="instruction">
            10 points is awarded for the correct answer.
          </li>
          <li className="instruction">
            Each question has three options. You can choose only one options.
          </li>
          <li className="instruction">
            You can review and change answers before the quiz finish.
          </li>
          <li className="instruction">
            The result will be declared at the end of the quiz.
          </li>
        </ol>

        <form id="form">
          <input
            type="text"
            placeholder="Username*"
            ref={inputRef}
            className="input-field"
          />
        </form>

        <Link className="btn" to={'/quiz'} onClick={startQuiz}>
          Start Quiz
        </Link>
      </section>
    </main>
  );
};

export default Home;
