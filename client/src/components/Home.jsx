import React, { useEffect,useState } from 'react'
import '../styles/Home.css'
import { Form, Input, message } from "antd";
import axios from 'axios'

const Home = () => {
  const [activityInfo, setActivityInfo] = useState([]);
  const [kidInfo, setKidInfo] = useState([]);

  const loadKidInfo = async () => {
    try {
      console.log("loading kid info");
      const res = await axios.get('http://localhost:3001/kid/viewKid')
      const kidInfoLocal=[];
      setKidInfo(kidInfoLocal);
      res.data.forEach(element => {
        kidInfoLocal.push(element.name+" ,"+element.gender+" ,"+element.dateOfBirth);
      });
      setKidInfo(kidInfoLocal);
    } catch (error) {
      console.log(error);
      message.error("Unexpected Error !");
    }
  };

  const loadActivityInfo = async () => {
    try {
      console.log("loading activity info");
      const res = await axios.get('http://localhost:3001/activity/viewActivity')
      const activityInfoLocal=[]
      setActivityInfo(activityInfoLocal);
      res.data.forEach(element => {
        activityInfoLocal.push(element.kidName+" ,"+element.activityName+" ,"+element.dayOfActivity);
      });
      setActivityInfo(activityInfoLocal);
    } catch (error) {
      console.log(error);
      message.error("Unexpected Error !");
    }
  };

  return (
    <div className='dashboard'>
      <div className='dashboard-container' onClick={loadActivityInfo}>
        <h2>Activity Info</h2>
        <ul>
          {
            activityInfo.map((r) =>
            <li key='{r}'>
              {r}
            </li>
          )}          
          {activityInfo}
        </ul>
      </div>
      <div className='dashboard-container' onClick={loadKidInfo}>
        <h2>Kid Info</h2>    
        <ul>
          {
            kidInfo.map((r) =>
            <li key='{r}'>
              {r}
            </li>
          )}          
          {activityInfo}
        </ul> 
      </div>
    </div>
  )
}

export default Home