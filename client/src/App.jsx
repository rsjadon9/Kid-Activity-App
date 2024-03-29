import {BrowserRouter, Routes, Route} from "react-router-dom"
import LandingPage from "./components/LandingPage"
import MenuBar from "./components/MenuBar"
import Activity from './components/AddActivity'
import Login from './components/Login'
import UserSignup from './components/UserSignup'
import AddKid from './components/AddKid'
import Home from './components/Home'
import AddActivity from "./components/AddActivity"


function App() {

  return (
    <>
      <BrowserRouter>
      <MenuBar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/addActivity" element={<Activity/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/newUserSignup" element={<UserSignup/>}></Route>
        <Route path="/addKid" element={<AddKid/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
