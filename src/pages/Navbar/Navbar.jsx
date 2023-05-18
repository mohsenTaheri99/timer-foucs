import React from 'react'
import "./Navbar.css"

import {
    BrowserRouter , Routers,
    Route,NavLink, Outlet
  
  } from "react-router-dom";

import {  AiOutlineDashboard } from "react-icons/ai";
import {  ImStatsDots } from "react-icons/im";
import {  IoMdNotificationsOutline } from "react-icons/io";
import {  BsFillBrushFill } from "react-icons/bs";
import {  BiStore } from "react-icons/bi";
import {  BsFillPersonFill } from "react-icons/bs";


function Navbar() {
  return (
    <>
        <div className="sideBar">
            <div className="logo">logo</div>
            <div className="pages icon">
                <NavLink to='/' className={'nav-link'} activeClassName="selected" >
                    <div className='cuntener-icon'>
                        <div className='sidebar-po'>تمرکز</div>
                        <AiOutlineDashboard/>
                    </div>
                </NavLink >
                <NavLink to="/setting" className={'nav-link'} activeClassName="selected">
                    <div className="cuntener-icon">
                        <div className='sidebar-po'>تنظیمات</div>
                        <IoMdNotificationsOutline/>
                    </div>
                </NavLink>
                <NavLink to="/account" className='nav-link' activeClassName="selected"> 
                    <div className="cuntener-icon">
                        <div className='sidebar-po'>پروفایل</div>
                        <BsFillPersonFill/>
                    </div>
                </NavLink> 
            </div>
        </div>
        <Outlet/>
    </>
  )
}

export default Navbar