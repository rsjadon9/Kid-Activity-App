import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Form, Input, message } from "antd";
import '../styles/Login.css'
import axios from 'axios'

const AddKid = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [cell, setCell] = useState('')
  const navigate = useNavigate()

  //form handler
  const handleSubmit = async (values) => {
    try {
      const res = await axios.post('http://localhost:3001/user/signup', {username, password,email,cell})
      if (res.data.success) {
        message.success("Signup Successful !");
        navigate('/login')
      } else {        
        message.error(res.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      message.error("Unexpected Error !");
    }
  };

  return (
    <div className='login'>
      <div className='login-container'>
        <h2>New User Signup</h2>
        <br></br>
        <div className='form'>
          <label htmlFor='username'>Username</label>
          <input type="text" placeholder='Enter UserName' onChange={(e)=>setUsername(e.target.value)}/>   
      </div>
      <div className='form'>
          <label htmlFor='username'>Password</label>
          <input type="password" placeholder='Enter password'onChange={(e)=>setPassword(e.target.value)}/>   
      </div>
      <div className='form'>
          <label htmlFor='username'>Email</label>
          <input type="text" placeholder='Enter Email'onChange={(e)=>setEmail(e.target.value)}/>   
      </div>
      <div className='form'>
          <label htmlFor='username'>Cell</label>
          <input type="text" placeholder='Enter password'onChange={(e)=>setCell(e.target.value)}/>   
      </div>            
      <button className='btn-login' onClick={handleSubmit}>Signup</button>
      </div>
    </div>
  )
}

export default AddKid