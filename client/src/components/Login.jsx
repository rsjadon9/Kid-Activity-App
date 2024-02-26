import React, { useState } from 'react'
import '../styles/Login.css'
import axios from 'axios'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () =>{
        e.preventDefault();

  }
  return (
    <div className='login'>
      <div className='login-container'>
        <h2>Login</h2>
        <div className='form'>
          <label htmlFor='username'>Username</label>
          <input type="text" placeholder='Enter UserName' onChange={(e)=>setUsername(e.target.value)}/>   
      </div>
      <div className='form'>
          <label htmlFor='username'>Password</label>
          <input type="password" placeholder='Enter password'onChange={(e)=>setPassword(e.target.value)}/>   
      </div>
      <button className='btn-login'onClick={handleSubmit}>Login</button>
      </div>
    </div>
  )
}

export default Login
