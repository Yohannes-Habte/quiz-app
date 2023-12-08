import React, { useState } from 'react';
import './Quiz.scss';
import Questions from '../questionsPage/Questions';

const Quiz = () => {
  const [check, setChecked] = useState(undefined);

  // Next Question
  const nextQuestion = () => {};

  // Next Question
  const PreviousQuestion = () => {};

  // on checked handler
  const onChecked = (check) => {
    setChecked(check);
  };

  return (
    <main>
      <section>
        <h1 className="title">Quiz Application</h1>

        {/* display questions */}
        <Questions onChecked={'onChecked'} />

        <div className="buttons-wrapper">
          {'trace' > 0 ? (
            <button className="next-btn" onClick={PreviousQuestion}>
              Prev
            </button>
          ) : (
            <div></div>
          )}
          <button className="btn next" onClick={nextQuestion}>
            Next
          </button>
        </div>
      </section>
    </main>
  );
};

export default Quiz;
