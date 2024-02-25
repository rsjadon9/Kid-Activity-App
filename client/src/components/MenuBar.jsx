import React from 'react'
import { Link } from 'react-router-dom'

const MenuBar = () => {
  return (
    <nav className='menubar'>
      <div className='left-menu'>
        <span>KID-ACTIVITY-APP</span>
      </div>
<div className='right-menu'>
  <Link to ="/activity" className='menubar-link'>Activity</Link>
  <Link to ="/login" className='menubar-link'>Login</Link>
  
</div>
    </nav>
  )
}

export default MenuBar
