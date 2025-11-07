import { useState } from "react";
import Header from "../components/Header.jsx";
import AboutSection from "../components/AboutSection.jsx";
import FeaturedArtwork from "../components/FeaturedArtwork.jsx";
import Achievments from "../components/Achievments.jsx";

function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-28 md:pt-36 px-4 md:px-16 space-y-16">
        {/* About Section */}
        <AboutSection />

        {/* Featured Artwork Section */}
        <FeaturedArtwork />

        {/* Achievments */}
        <Achievments/>
      </main>
    </div>
  );
}

export default HomePage;
