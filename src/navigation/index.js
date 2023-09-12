import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import {  Dashboard, Home} from "../Pages";
import { Footer } from "../components";
import { useSelector } from "react-redux";


const Navigation = () => {
  const navigate = useNavigate();
  const tasks = useSelector((state) => state.auth);
  const {isLoggedIn} = tasks;

useEffect(()=>{
  console.log(isLoggedIn)
  if(isLoggedIn || localStorage.getItem("token"))
  {
    navigate("/dashboard")
  }
  else{
    navigate("/home")
  }

},[tasks,navigate])

  return  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
  
}
export default Navigation;