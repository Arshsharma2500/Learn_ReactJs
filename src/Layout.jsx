import React from 'react'
import PassWdGenerator from './PassWdGenerator'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
    
    <Outlet/>
    {/* <PassWdGenerator /> */}
    </>
  )
}

export default Layout