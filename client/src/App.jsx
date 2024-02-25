import {BrowserRouter, Routes, Route} from "react-router-dom"
import LandingPage from "./components/LandingPage"
import MenuBar from "./components/MenuBar"

function App() {

  return (
    <>
      <BrowserRouter>
      <MenuBar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}>
</Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
