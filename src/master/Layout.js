import React from 'react'
import { Outlet } from 'react-router-dom'
import Siderbar from '../components/Siderbar'
import Header from '../components/Header'

function Layout() {
  return (
<div class="layout-wrapper layout-content-navbar  ">
  <div class="layout-container">
      <Siderbar/>
      <div className="layout-page">
      <Header/>
      
       <Outlet/>
       </div>
       </div>
    </div>
  )
}

export default Layout
