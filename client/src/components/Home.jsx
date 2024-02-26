import React, { useEffect,useState } from 'react'
import '../styles/Home.css'
import { Form, Input, message } from "antd";
import axios from 'axios'

const Home = () => {
  const activityInfo = [];
  const kidInfo = [];

  const loadKidInfo = async () => {
    try {
      console.log("loading kid info");
      const res = await axios.get('http://localhost:3001/kid/viewKid')
      res.data.forEach(element => {
        kidInfo.push(element);
      });
    } catch (error) {
      console.log(error);
      message.error("Unexpected Error !");
    }
  };

  const loadActivityInfo = async () => {
    try {
      console.log("loading activity info");
      const res = await axios.get('http://localhost:3001/activity/viewActivity')
      res.data.forEach(element => {
        activityInfo.push(element);
      });
    } catch (error) {
      console.log(error);
      message.error("Unexpected Error !");
    }
  };

  loadKidInfo();
  loadActivityInfo();

  return (
    <div className='dashboard'>
      <div className='dashboard-container' onClick={loadActivityInfo}>
        <h2>Activity Info</h2>
      </div>
      <div className='dashboard-container' onClick={loadKidInfo}>
        <h2>Kid Info</h2>      </div>
    </div>
  )
}

export default Home