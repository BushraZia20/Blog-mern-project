import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "../LoginSignup/SignUpPage";
import LoginPage from "../LoginSignup/LoginPage";
import HomePage from "../BloggingPage/HomePage";

const Home = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/bloghomepage" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Home;
