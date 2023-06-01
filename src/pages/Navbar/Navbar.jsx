import React from 'react'
import "./Navbar.css"

import {
    BrowserRouter , Routers,
    Route,NavLink, Outlet
  
  } from "react-router-dom";

import {  AiOutlineDashboard } from "react-icons/ai";
import {  ImStatsDots } from "react-icons/im";
import {  VscSettings } from "react-icons/vsc";
import {  BsFillBrushFill } from "react-icons/bs";
import {  BiStore } from "react-icons/bi";
import {  BsFillPersonFill } from "react-icons/bs";
import {  ImStatsBars } from "react-icons/im";



function Navbar({darkmod}) {
  return (
    <>
        <div className="sideBar" style={{...darkStyleBg(darkmod)}}>
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
                        <VscSettings/>
                    </div>
                </NavLink>
                <NavLink to="/stats" className='nav-link' activeClassName="selected"> 
                    <div className="cuntener-icon">
                        <div className='sidebar-po'>آمار</div>
                        <ImStatsBars/>
                    </div>
                </NavLink> 
            </div>
        </div>
        <Outlet/>
    </>
  )
}

const darkStyleBg = (darkmod)=> {
    if(darkmod) return {
      background : '#2e2e2e',
      color : 'white',
    // boxShadow: '0 0 5px 2px rgb(37, 150, 190),0 0 0px 2px rgb(18, 36, 194)',
    border: '1px solid rgb(37, 150, 190)',



    }
    else return {}
  }
  
export default Navbar