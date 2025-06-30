import { Route, Routes } from "react-router-dom"
import '../Styles/App.css';
import Layout from "./Layout";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import LandingPage from "./LandingPage/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
