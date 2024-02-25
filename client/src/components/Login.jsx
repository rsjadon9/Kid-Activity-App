import React from 'react'

const Login = () => {
  return (
    <div className='login'>
      <div className='login-container'>
        <h2>Login</h2>
        <div className='form'>
          <label htmlFor='username'>Username</label>
          <input type="text" placeholder='Enter UserName'/>   '
      </div>
      <div className='form'>
          <label htmlFor='username'>Password</label>
          <input type="password" placeholder='Enter password'/>   '
      </div>
      <button className='btn-login'>Login</button>
      </div>
    </div>
  )
}

export default Login
