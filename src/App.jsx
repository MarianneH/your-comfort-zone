import React from "react";
import "./App.css";
import NewsSection from "./components/newsSection/news-section";
import WelcomeSection from "./components/welcomeSection/welcome-section";
import GetSpacePhotos from "./components/SpacePhotosComponent/space-photos";

function App() {
  return (
    <div className="wrapper">
      <WelcomeSection />
      <NewsSection />
      <GetSpacePhotos />
    </div>
  );
}

export default App;
