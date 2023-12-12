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
        console.log(error)
      }
    };
    fetchData();
  }, []);

  console.log("result data", data)

  return (
    <div>
      <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>Name</td>
            <td>Attemps</td>
            <td>Earn Points</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          {!data ?? <div>No Data Found </div>}
          {data?.map((user, index) => (
            <tr className="table-body" key={index}>
              <td>{user?.username || ''}</td>
              <td>{user?.attempts || 0}</td>
              <td>{user?.points || 0}</td>
              <td>{user?.achived || ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
