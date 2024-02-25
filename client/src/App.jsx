import {BrowserRouter, Routes, Route} from "react-router-dom"
import LandingPage from "./components/LandingPage"
import MenuBar from "./components/MenuBar"
import Activity from './components/Activity'
import  Login from './components/Login'

function App() {

  return (
    <>
      <BrowserRouter>
      <MenuBar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/activity" element={<Activity/>}></Route>
        <Route path="/login" element={<Login/>}>
        </Route>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
