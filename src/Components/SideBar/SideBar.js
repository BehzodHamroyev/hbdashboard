import React from 'react';
import SideBarWrapper from './SideBarWrapper';
import dataDashboard from '../../datas/dataDashboard';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import user from './user.jpg'

const SideBar = () => {
  const { page } = useParams()
  // console.log(page);
  const sidebar = useSelector(state => state.sidebar)
  console.log(sidebar);
  return sidebar && <SideBarWrapper sidebar={sidebar} className="shadow">
    <div className="user d-flex container mt-5 ms-3 align-items-center">
      <img src={user} className="logo me-3 " alt="" />
   <h5 className="userName">Hamroyev Behzod</h5>
    </div>
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
