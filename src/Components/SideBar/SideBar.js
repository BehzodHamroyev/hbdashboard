import React from 'react';
import SideBarWrapper from './SideBarWrapper';
import dataDashboard from '../../datas/dataDashboard';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../App.css';

const SideBar = () => {
  const { page } = useParams()
  // console.log(page);
  const sidebar = useSelector(state => state.sidebar)
  console.log(sidebar);
  return sidebar && <SideBarWrapper sidebar={sidebar} className="shadow">
    <ul className="menu">
      {
        dataDashboard.map((v, i) => {
          return <li key={i}>
            <Link className={`${page == v.to && "active" || ""} listItem text-start`} to={`/dashboard/${v.to}`}><div className="d-flex justify-content-between align-items-center "><div className="me-2 text-start">{v.icon}</div>{v.title}</div></Link>
          </li>
        })
      }
    </ul>
  </SideBarWrapper> || ""

};

export default SideBar;
