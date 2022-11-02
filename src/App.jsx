import React from "react";
import "./App.css";
import NewsSection from "./components/newsSection/news-section";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetSpacePhotos from "./components/SpacePhotosComponent/space-photos";
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
