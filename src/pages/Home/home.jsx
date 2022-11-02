import React from "react";
import { Link } from "react-router-dom";
import NewsSection from "../../components/newsSection/news-section";
import GetSpacePhotos from "../../components/SpacePhotosComponent/space-photos";

export default function Home() {
    return (
        <div>
        {/* <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link> */}
        <NewsSection />
        <GetSpacePhotos />
        </div>
    );
}