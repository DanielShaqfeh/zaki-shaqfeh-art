import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="text-white py-20 px-8 md:px-20 flex flex-col md:flex-row items-start gap-36 max-w-7xl mx-auto"
    >
      {/* Left side - Artist Image */}
      <div className="w-full md:w-1/3 flex-shrink-0">
        <img
          src="https://img.freepik.com/free-vector/crazy-style-technology-illustration_52683-93860.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Zaki Shaqfeh Portrait"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>

      {/* Right side - About Text */}
      <div className="w-full md:w-2/3 text-gray-200 flex flex-col justify-start">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-wide">
          ABOUT
        </h2>
        <p className="text-lg leading-relaxed text-gray-400">
          Zaki Shaqfeh is an emerging artist in the vibrant tapestry of
          contemporary artistry, distinguished by his distinctive vision and
          unwavering creativity. His artistic journey is an exploration of the
          intricate interplay between emotion and the world — an exploration
          vividly expressed through his art.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
