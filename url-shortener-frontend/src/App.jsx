import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./component/LandingPage";
import AboutPage from "./component/AboutPage";
import RegisterPage from "./component/RegisterPage";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Toaster } from "react-hot-toast";
import LoginPage from "./component/LoginPage";
import DashboardLayout from "./component/Dashboard/DashboardLayout";


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Toaster position="bottom-center" />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/dashboard" element={<DashboardLayout/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
