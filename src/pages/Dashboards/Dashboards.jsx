import React from 'react';
import { useParams } from 'react-router-dom';
import Dashboard from '../../Containers/Dashboard';
import Albums from '../Albums/Albums';
import Home from '../Home/Home';
import Posts from '../Posts/Posts';
import Photos from '../Photos/Photos';
import DashboardsWrapper from './DashboardsWrapper';
import Todos from '../Todos/Todos';
import Users from '../Users/Users';

const Dashboards = () => {
  const { page } = useParams();
  console.log(page);
  return (
    <DashboardsWrapper>
      <Dashboard>
        {page === 'home' && <Home />}
        {page === 'posts' && <Posts />}
        {page === 'albums' && <Albums />}
        {page === 'photos' && <Photos />}
        {page === 'todos' && <Todos />}
        {page === 'users' && <Users />}
      </Dashboard>
    </DashboardsWrapper>
  );
};

export default Dashboards;
