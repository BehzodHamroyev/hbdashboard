import React from 'react';
import NavbarWrapper from './NavbarWrapper';
import logo from '../../logo.svg';
import { FaBars } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { clickSidbar } from '../../Redux/action';
const Navbar = () => {
  const sidebar = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
 const showSidebar=()=>{
      clickSidbar(dispatch);
 }

  console.log(sidebar);
  return (
    <NavbarWrapper  className="d-flex justify-content-between  shadow px-4 align-items-center">
      <img src={logo} className="logo" alt="" />
      <button onClick={showSidebar} className="btn btn-light">
        <FaBars />
      </button>
    </NavbarWrapper>
  );
};

export default Navbar;
