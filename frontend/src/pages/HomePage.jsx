import { useState } from "react";
import Header from "../components/Header.jsx";
import AboutSection from "../components/AboutSection.jsx";

function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-28 md:pt-36">
        <AboutSection />
      </main>
    </div>
  );
}

export default HomePage;
