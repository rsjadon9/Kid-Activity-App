import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Form, Input, message } from "antd";
import '../styles/Login.css'
import axios from 'axios'

const AddActivity = () => {
  const [activityName, setActivityName] = useState('')
  const [kidName, setKidName] = useState('')
  const [dayOfActivity, setDayOfActivity] = useState('')
  const [recurringIndicator, setRecurringIndicator] = useState('')
  const [paidIndicator, setPaidIndicator] = useState('')

  const navigate = useNavigate()

  //form handler
  const handleSubmit = async (values) => {
    try {
      const res = await axios.post('http://localhost:3001/activity/addActivity', {activityName, kidName,dayOfActivity,recurringIndicator,paidIndicator})
      if (res.data.success) {
        message.success("New Activity Added !");
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
        <h2>Add New Activity</h2>
        <br></br>
        <div className='form'>
          <label htmlFor='Name'>Activity Name</label>
          <input type="text" placeholder='Enter Activity Name' onChange={(e)=>setActivityName(e.target.value)}/>   
      </div>
      <div className='form'>
          <label htmlFor='gender'>Kid Name</label>
          <input type="text" placeholder='Enter Kid Name' onChange={(e)=>setKidName(e.target.value)}/>   
      </div>
      <div className='form'>
          <label htmlFor='dayOfActivity'>Day Of Acitivity</label>
          <input type="text" placeholder='Enter Day Of Activity' onChange={(e)=>setDayOfActivity(e.target.value)}/>   
      </div> 
      <div className='form'>
          <label htmlFor='recurringIndicator'>Recurring Indicator</label>
          <input type="text" placeholder='Enter Yes for Recurring Activity' onChange={(e)=>setRecurringIndicator(e.target.value)}/>   
      </div> 
      <div className='form'>
          <label htmlFor='paidIndicator'>Paid Indicator</label>
          <input type="text" placeholder='Enter Yes for Paid Activity' onChange={(e)=>setPaidIndicator(e.target.value)}/>   
      </div>                        
      <button className='btn-login' onClick={handleSubmit}>Add Activity</button>
      </div>
    </div>
  )
}

export default AddActivity