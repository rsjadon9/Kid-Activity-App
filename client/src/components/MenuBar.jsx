import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/MenuBar.css'

const MenuBar = () => {
  return (
    <nav className='menubar'>
      <div className='left-menu'>
        <Link to ='/' className='menu-navbar'>Kid Activity Tracker</Link>
      </div>
<div className='right-menu'>
<Link to ="/newUserSignup" className='menubar-link'>New User Signup</Link>
<Link to ="/login" className='menubar-link'>Login</Link>
<Link to ="/home" className='menubar-link'>My Dashboard</Link>
<Link to ="/addkid" className='menubar-link'>Add Kid</Link>
<Link to ="/addactivity" className='menubar-link'>Add Activity</Link>
</div>
    </nav>
  )
}

export default MenuBar
