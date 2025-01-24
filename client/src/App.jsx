import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Register from "./Components/Register"
import Login from "./Components/Login"
import Verify from "./Components/verify"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/verify" element={<Verify/>}/>
    </Routes>
  )
}

export default App
