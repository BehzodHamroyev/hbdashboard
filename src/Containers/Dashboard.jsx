import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import SideBar from '../Components/SideBar/SideBar';
import DashboardWrapper from './DashboardWrapper';

const Dashboard = (props) => {
  return (
    <DashboardWrapper>
      <SideBar />
      <div className="right">
        <Navbar />
        <div className="content px-4">{props.children}</div>
      </div>
    </DashboardWrapper>
  );
};

export default Dashboard;
