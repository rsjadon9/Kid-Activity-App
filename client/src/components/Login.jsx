import React, { useState } from 'react'
import { Form, Input, message } from "antd";
import '../styles/Login.css'
import axios from 'axios'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  //form handler
  const handleSubmit = async (values) => {
    try {
      const res = await axios.post("/login", values);
      window.location.reload();
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Unexpected Error !");
    }
  };

  return (
    <div className='login'>
      <div className='login-container'>
        <h2>Login To Manage Kids Activity</h2>
        <br></br>
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
