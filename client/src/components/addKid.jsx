import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Form, Input, message } from "antd";
import '../styles/Login.css'
import axios from 'axios'

const AddKid = () => {
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')

  const navigate = useNavigate()

  //form handler
  const handleSubmit = async (values) => {
    try {
      const res = await axios.post('http://localhost:3001/kid/add', {name, gender,dateOfBirth})
      if (res.data.success) {
        message.success("New Kid Added !");
      } else {        
        message.error(res.data.message);
      }
      navigate('/')
    } catch (error) {
      console.log(error);
      message.error("Unexpected Error !");
    }
  };

  return (
    <div className='login'>
      <div className='login-container'>
        <h2>Add New Kid</h2>
        <br></br>
        <div className='form'>
          <label htmlFor='Name'>Name</label>
          <input type="text" placeholder='Enter Name' onChange={(e)=>setUsername(e.target.value)}/>   
      </div>
      <div className='form'>
          <label htmlFor='gender'>Gender</label>
          <input type="text" placeholder='Enter Gender' onChange={(e)=>setGender(e.target.value)}/>   
      </div>
      <div className='form'>
          <label htmlFor='dateOfBirth'>Date Of Birth</label>
          <input type="date" placeholder='Enter Date Of Birth' onChange={(e)=>setDateOfBirth(e.target.value)}/>   
      </div>            
      <button className='btn-login' onClick={handleSubmit}>Add Kid</button>
      </div>
    </div>
  )
}

export default AddKid