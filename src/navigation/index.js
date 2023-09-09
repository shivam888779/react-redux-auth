import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "../Pages";
import { Footer } from "../components";
import { useSelector } from "react-redux";


const Navigation = () => {
  const navigate = useNavigate();
  const tasks = useSelector((state) => state.auth);
  const {isUserValid} = tasks;

  // auth flow logic here 

  return  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home/>} />
    </Routes>
  
}
export default Navigation;