import React from 'react';
import './Result.scss';
import { Link } from 'react-router-dom';
import ResultTable from '../../../components/userProfile/resultTable/ResultTable';

const Result = () => {
  return (
    <main>
      <section>
        <h1 className="title">Quiz Application</h1>

        <div className="result flex-center">
          <article className="flex">
            <h3>Username</h3>
            <p className="bold">{'userId' || ''}</p>
          </article>
          <article className="flex">
            <h3>Total Quiz Points : </h3>
            <p className="bold">{'totalPoints' || 0}</p>
          </article>
          <article className="flex">
            <h3>Total Questions : </h3>
            <p className="bold">{'queue'.length || 0}</p>
          </article>
          <article className="flex">
            <h3>Total Attempts : </h3>
            <p className="bold">{'attempts' || 0}</p>
          </article>
          <article className="flex">
            <h3>Total Earn Points : </h3>
            <p className="bold">{'earnPoints' || 0}</p>
          </article>
          <article className="flex">
            <h3>Quiz Result</h3>
            <p
              style={{ color: `${'flag' ? '#2aff95' : '#ff2a66'}` }}
              className="bold"
            >
              {'flag' ? 'Passed' : 'Failed'}
            </p>
          </article>
        </div>

        <p className="restart">
          <Link className="btn" to={'/'} onClick={'onRestart'}>
            Restart
          </Link>
        </p>

        {/* result table */}
        <ResultTable />
      </section>
    </main>
  );
};

export default Result;
