import React, { useEffect, useState } from 'react';
import './ResultTable.scss';
import axios from 'axios';

const ResultTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/results`
        );
        setData(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log('result data', data);

  return (
    <table className="table">
      <thead className="table-header">
        <tr className="table-header-row">
          <td className="header-title">Name</td>
          <td className="header-title">Attemps</td>
          <td className="header-title">Points</td>
          <td className="header-title">Result</td>
        </tr>
      </thead>
      <tbody className="table-body">
        {!data ?? <div>No Data Found </div>}
        {data?.map((user, index) => (
          <tr className="table-body-row" key={index}>
            <td className="body-row-cell">{user?.username || ''}</td>
            <td className="body-row-cell">{user?.attempts || 0}</td>
            <td className="body-row-cell">{user?.points || 0}</td>
            <td className="body-row-cell">{user?.achived || ''}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;
