import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import AboutUs from "./pages/AboutUs/about-us";
import { ParallaxProvider } from "react-scroll-parallax";
import NavigationButton from "./components/navigationButton/navigation-button";

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Router>
          <NavigationButton />
          <Routes>
            <Route element={<Home />} exact path="/" />
            <Route element={<AboutUs />} path="/about-us" />
          </Routes>
      </div>
    </ParallaxProvider>
  );
}

export default App;
