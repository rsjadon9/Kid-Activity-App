import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/MenuBar.css'

const MenuBar = () => {
  return (
    <nav className='menubar'>
      <div className='left-menu'>
        <Link to ='/' className='menu-navbar'>KID-ACTIVITY-APP</Link>
      </div>
<div className='right-menu'>
  <Link to ="/activity" className='menubar-link'>Activity</Link>
  <Link to ="/login" className='menubar-link'>Login</Link>
  
</div>
    </nav>
  )
}

export default MenuBar
