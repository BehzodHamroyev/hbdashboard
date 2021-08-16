import React from 'react';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import { FaChartBar } from 'react-icons/fa';
import { Zoom } from 'react-awesome-reveal';

const cardAnalytic = (props) => {
  return (
    <Zoom bottom>
      <div className="container shadow rounded-10 my-5 py-4 pointer-event">
        <p className="title fw-bold">{props.data.title}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div
            className={` d-flex justify-content-between align-items-center my-3`}
          >
            <div
              className={`rounded-circle text-white p-1 bg-${props.data.color} d-flex justify-content-between align-items-center`}
            >
              {props.data.trendingIcon}
            </div>
            <p className="  m-0 p-0 ms-4 ">{props.data.protcent} %</p>
          </div>
          <FaChartBar className={`text-${props.data.color} fs-1`} />
        </div>
        <h1 className="text-start mt-2">{props.data.numberCardChart}</h1>
      </div>
    </Zoom>
  );
};

export default cardAnalytic;
