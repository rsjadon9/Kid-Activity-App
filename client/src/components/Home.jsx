import React, { useEffect,useState } from 'react'
import '../styles/Home.css'

import axios from 'axios'

const Home = () => {
  const activity = [];
  const kid = [];

  const loadKidInfo = async (values) => {
    try {
      const res = await axios.get('http://localhost:3001/kid/viewKid')
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate('/dashboard')
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
    <div className='dashboard'>
      <div className='dashboard-container' onLoad= {loadActivityInfo}>
        <h2>Activity Info</h2>
        <h2>{activityInfo}</h2>
        </div>
      <div className='dashboard-container' onLoad= {loadKidInfo}>
        <h2>Kid Info</h2>
        <h2>{kidInfo}</h2>
      </div>
    </div>
  )
}

export default Home