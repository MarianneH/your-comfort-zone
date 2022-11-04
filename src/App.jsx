import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import AboutUs from "./pages/AboutUs/about-us";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { useState } from "react";

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route element={<Home />} exact path="/" />
            <Route element={<AboutUs />} path="/about-us" />
          </Routes>
        </Router>{" "}
      </div>
    </ParallaxProvider>
  );
}

export default App;
