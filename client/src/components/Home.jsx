import React, { useEffect,useState } from 'react'
import '../styles/Home.css'
import { Form, Input, message } from "antd";
import axios from 'axios'

const Home = () => {
  const activityInfo = [];
  const kidInfo = [];

  const loadKidInfo = async () => {
    try {
      console.log("load kid info");
      const res = await axios.get('http://localhost:3001/kid/viewKid')
      console.log(res.data);
      kidInfo.push(res.data)
      console.log(kidInfo);
      console.log("at end");
    } catch (error) {
      console.log(error);
      message.error("Unexpected Error !");
    }
  };

  const loadActivityInfo = async () => {
    try {
      console.log("load activity info");
      const res = await axios.get('http://localhost:3001/activity/viewActivity')
      activityInfo.push(res.data)
    } catch (error) {
      console.log(error);
      message.error("Unexpected Error !");
    }
  };

  return (
    <div className='dashboard'>
      <div className='dashboard-container' onLoad={loadActivityInfo} onClick={loadActivityInfo}>
        <h2>Activity Info</h2>
        </div>
      <div className='dashboard-container' onLoad={loadKidInfo} onClick={loadActivityInfo}>
        <h2>Kid Info</h2>      </div>
    </div>
  )
}

export default Home