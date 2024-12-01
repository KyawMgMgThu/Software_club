import React from 'react'
import { NavbarRoutes } from './Navbar-routes'

const Navbar  = () => {
  return (
    <div className="p-4 border-b h-full flex items-center shadow-sm">
        <NavbarRoutes />
    </div>
  )
}

export default Navbar 