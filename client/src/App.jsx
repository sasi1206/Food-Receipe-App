import { Route, Routes } from "react-router-dom"
import Layout from "./Layouts/Layout";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Auth from "./Pages/Auth/Auth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="auth" element={<Auth/>}/>
      </Route>
    </Routes>
  )
}

export default App
