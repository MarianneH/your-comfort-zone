import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import AboutUs from "./pages/AboutUs/about-us";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route element={<Home />} exact path="/" />
            <Route element={<AboutUs />} path="/about-us" />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
