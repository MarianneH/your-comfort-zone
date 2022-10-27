import React from "react";
import "./App.css";
import GetNewsFeed from "./components/NewsComponent/newsFeed";
import GetSpacePhotos from "./components/SpacePhotosComponent/space-photos";

function App() {
  return <>
  {<GetNewsFeed />}
  <GetSpacePhotos/>>
  </>;
}

export default App;
