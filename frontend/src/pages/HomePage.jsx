import { useState } from "react";
import Header from "../components/Header.jsx";
import AboutSection from "../components/AboutSection.jsx";
import FeaturedArtwork from "../components/FeaturedArtwork.jsx";
import Achievements from "../components/Achievements.jsx";

function HomePage({ showAllInitial = false }) {
  const [showAllArtworks, setShowAllArtworks] = useState(showAllInitial);

  const handleShowAll = () => setShowAllArtworks(true); // triggered by Discover More
  const handleHomeClick = () => setShowAllArtworks(false); // triggered by Home button

  return (
    <div className="flex flex-col min-h-screen text-white">
      {/* Header */}
      <Header showHomeOnly={showAllArtworks} onHomeClick={handleHomeClick} />

      {/* Main Content */}
      <main className="pt-28 md:pt-36 px-4 md:px-16 space-y-16">
        {!showAllArtworks && <AboutSection />}
        <FeaturedArtwork showAll={showAllArtworks} onShowAll={handleShowAll} />
        {!showAllArtworks && <Achievements />}
      </main>
    </div>
  );
}

export default HomePage;
