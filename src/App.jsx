import React from "react";
import "./App.css";
import NewsSection from "./components/newsSection/news-section";
import WelcomeSection from "./components/welcomeSection/welcome-section";

function App() {
  return (
    <div className="wrapper">
      <WelcomeSection />
      <NewsSection />
    </div>
  );
}

export default App;
