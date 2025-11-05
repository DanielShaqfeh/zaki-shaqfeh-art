import React from "react";
import AboutText from "./AboutText.jsx";
import AboutCarousel from "./AboutCarousel.jsx";

const AboutSection = () => {
  return (
    <section id="about" className="text-white py-20 px-8 md:px-20 flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-36 max-w-7xl mx-auto">
      {/* Left side - Image Carousel */}
      <AboutCarousel />

      {/* Right side - About Text */}
      <div className="w-full md:w-2/3 flex flex-col justify-center text-center">
        <h2 className="text-4xl md:text-4xl font-semibold mb-6 tracking-wide aboreto-font">
          <span className="inline-block border-b-2 border-white pb-1">ABOUT</span>
        </h2>
        <AboutText />
      </div>
    </section>
  );
};

export default AboutSection;
